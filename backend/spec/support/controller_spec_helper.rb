module ControllerSpecHelper
  # generate tokens from user id
  def token_generator(user_id)
    AuthToken.encode(user_id: user_id)
  end

  # return valid headers
  def valid_headers
    {
        "Authorization" => token_generator(user.id),
        "Content-Type" => "application/json"
    }
  end

  # return invalid headers
  def invalid_headers
    {
        "Authorization" => nil,
        "Content-Type" => "application/json"
    }
  end
end
