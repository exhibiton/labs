class AuthController < BaseController
  before_action :authenticate_request!, only: [:renew_token]

  def authenticate
    user = User.authenticate(params[:email], params[:password])

    if user
      render json: user.authentication_payload
    else
      messages = 'Invalid password'
      render json: { errors: messages }, status: :unauthorized
    end
  end

  def renew_token
    render json: current_user.authentication_payload
  end
end
