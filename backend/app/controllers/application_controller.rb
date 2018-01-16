class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  attr_reader :current_user

end
