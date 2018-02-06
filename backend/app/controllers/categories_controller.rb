class CategoriesController < BaseController
  before_action :authenticate_request!

  # GET /categories
  def index
    categories = Category.all
    json_response(categories)
  end

  # GET /categories/select_options
  def select_options
    options = Category.all.map do |category|
      { value: category.id, label: category.name }
    end
    render json: options
  end

  # POST /categories
  def create
    if category = Category.create!(category_params)
      json_response(category, :created)
    else
      head :unprocessable_entity
    end
  end

  private

  def category_params
    params.permit(:name)
  end

  def set_company
    @company ||= Company.find(params[:company_id])
  end

end