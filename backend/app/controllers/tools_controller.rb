class ToolsController < BaseController
  before_action :authenticate_request!
  before_action :set_company, only: [:create]

  # GET /tools
  def index
    tools = Tool.all
    json_response(tools)
  end

  # GET /tools/select_options
  def select_options
    options = Tool.all.map do |tool|
      { value: tool.id, label: tool.name }
    end
    render json: options
  end

  # POST /tools
  def create
    if tool = Tool.create!(tool_params)
      tool.companies << @company if @company
      json_response(tool, :created)
    else
      head :unprocessable_entity
    end
  end

  private

  def tool_params
    params.permit(:name, :icon)
  end

  def set_company
    @company ||= Company.find(params[:company_id])
  end

end