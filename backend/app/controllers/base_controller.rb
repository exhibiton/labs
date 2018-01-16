class BaseController < ApplicationController
  before_action :soft_authenticate_request

  # Custom classes for authentication
  class NotAuthenticatedError < StandardError; end
  class AuthenticationTimeoutError < StandardError; end

  rescue_from AuthenticationTimeoutError, with: :authentication_timeout
  rescue_from NotAuthenticatedError, with: :user_not_authenticated
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  protected



  def record_not_found
    render json: { errors: "Record Not Found" }, status: :not_found
  end

  def soft_authenticate_request
    extract_user_from_auth_token
  rescue JWT::ExpiredSignature, JWT::ImmatureSignature, JWT::VerificationError,
      JWT::DecodeError, ActiveRecord::RecordNotFound, NotAuthenticatedError
    nil
  end

  # This method gets the current user based on the user_id included
  # in the Authorization header (json web token).
  #
  # Call this from child controllers in a before_action or from
  # within the action method itself
  def authenticate_request!
    # already authenticated in soft authentication
    return true if @current_user
    extract_user_from_auth_token
  rescue JWT::ExpiredSignature, JWT::ImmatureSignature
    raise AuthenticationTimeoutError
  rescue JWT::VerificationError
    raise_auth_error('JWT Verification')
  rescue JWT::DecodeError
    raise_auth_error('JWT Decode')
  rescue  ActiveRecord::RecordNotFound
    raise_auth_error('Record Not Found')
  end

  def raise_auth_error(title)
    # filter out errors without authorization at all
    if request.headers['Authorization'].present?
      Rollbar.error("Authentication error: #{title}",
                    params: params,
                    token: request.headers['Authorization'])
    end

    raise NotAuthenticatedError
  end

  def extract_user_from_auth_token
    raise_auth_error('User ID not included') unless user_id_included_in_auth_token?

    @current_user = User.find(decoded_user_id)
    fail NotAuthenticated if @current_user.blank?
  end

  def json_params_for(required: nil, permitted: [])
    json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )

    if required
      permitted_params = json_params.require(required)
    else
      permitted_params = json_params
    end

    permitted_params.permit(*permitted)
  rescue JSON::ParserError
    {}
  end

  private

  def user_id_included_in_auth_token?
    http_auth_token && decoded_auth_token && decoded_user_id
  end

  def decoded_user_id
    decoded_auth_token[:user_id] || decoded_auth_token[:id]
  end

  # Decode the authorization header token and return the payload
  def decoded_auth_token
    @decoded_auth_token ||= AuthToken.decode(http_auth_token)
  end

  # Raw Authorization Header token (json web token format)
  # JWT's are stored in the Authorization header using this format:
  # Bearer somerandomstring.encoded-payload.anotherrandomstring
  def http_auth_token
    @http_auth_token ||= if request.headers['Authorization'].present?
                           request.headers['Authorization'].split(' ').last
                         else
                           request.params['Authorization']
                         end
  end

  def authentication_timeout
    render json: { errors: 'Authentication timed out' }, status: 419
  end

  def user_not_authenticated
    render json: { errors: 'Not authorized' }, status: :unauthorized
  end

end
