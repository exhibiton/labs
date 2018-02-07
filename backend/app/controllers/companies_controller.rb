class CompaniesController < BaseController
  before_action :authenticate_request!
  before_action :set_company, only: [:show, :update, :destroy]
  before_action :set_user

  # GET /companies
  def index
    companies = Company.all
    json_response(companies)
  end

  # POST /companies
  def create
    tools = Tool.where(id: params[:tools])
    categories = Category.where(id: params[:categories])
    additional_users = User.where(id: params[:users])
    company = Company.create!(company_params)
    company.tools << tools if tools.present?
    company.users << @user if @user
    company.users << additional_users if additional_users.present?
    company.categories << categories if categories.present?
    render json: { user: current_user, message: "Company Created" }
  end


  # GET /companies/:id
  def show
    json_response(@company)
  end

  # PUT /companies/:id
  def update
    if @company.users.include?(@user)
      if @company.update(company_params)
        users = User.where(id: params[:users])
        categories = Category.where(id: params[:categories])
        tools = Tool.where(id: params[:tools])

        @company.tools = tools if tools.present?
        @company.users = users if users.present?
        @company.categories = categories if categories.present?
        
        json_response(@company)
      else
        head :unprocessable_entity
      end
    else
      head :unauthorized
    end
  end

  # DELETE /companies/:id
  def destroy
    if @company.users.include?(@user)
      @user.update_attribute :company_id, nil
      @company.destroy
      head :no_content
    else
      head :unauthorized
    end
  end

  private

  def company_params
    params.permit(:name, :description, :github, :facebook, :website, :linkedin, :twitter, :logo, :category_ids => [],  :tool_ids => [],  :user_ids => [])
  end

  def set_company
    @company = Company.find(params[:id])
  end

  def set_user
    @user = current_user || User.find(params[:user_id])
  end
end
