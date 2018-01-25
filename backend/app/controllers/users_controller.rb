class UsersController < BaseController
  before_action :authenticate_request!, only: [:index,
                                               :update,
                                               :destroy,
                                               :upload_photo]

  def create
    user = User.new(user_params)
    if user.save
      render json: user.authentication_payload
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /users
  # This path is used to find other users who have registered but do not have a company yet.
  # For example a founder adds their co-founder to the company profile.
  def index
    users = User.all.where(company_id:nil)
    json_response(users)
  end

  # GET /users/select_options
  # This path is used to find other users who have registered but do not have a company yet.
  # For example a founder adds their co-founder to the company profile.
  def select_options
    options = User.all.where(company_id:nil).map do |user|
      { value: user.id, label: "#{user.first_name} #{user.last_name}" }
    end
    render json: options
  end


  def upload_photo
    if @current_user.update(avatar: params[:avatar])
      render json: @current_user.authentication_payload, status: :ok
    else
      render json: { message: @current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @current_user.update(user_params)
      render json: @current_user.authentication_payload, status: :ok
    else
      render json: { message: @current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:email, :first_name, :avatar, :last_name, :password, :password_confirmation, :current_password)
  end

end