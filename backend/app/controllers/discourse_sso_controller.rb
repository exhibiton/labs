require 'single_sign_on'

class DiscourseSsoController < BaseController
  before_action :authenticate_request!

  def sso
    user = User.find(params[:userId])
    secret = "fa87bf7ceb222cfca0b7d6b08eff6e2b4c8c405f38c28c062c31824a20c21d8eb7a09d839ff9d06cd9709509ee6a1a26d482c766f87fe8f29dbf4f95ff36a4f9"
    sso = SingleSignOn.parse(request.query_string, secret)
    sso.email = user.email # from devise
    sso.name = user.full_name # this is a custom method on the User class
    sso.username = user.username # from devise
    sso.external_id = user.id # from devise
    sso.avatar_url = user.avatar.url
    sso.sso_secret = secret

    json_response(sso.to_url(ENV['DISCOURSE_REDIRECT_URL']))
  end
end
