require 'single_sign_on'

class DiscourseSsoController < ApplicationController
  before_action :authenticate_user! # ensures user must login

  def sso
    secret = "fa87bf7ceb222cfca0b7d6b08eff6e2b4c8c405f38c28c062c31824a20c21d8eb7a09d839ff9d06cd9709509ee6a1a26d482c766f87fe8f29dbf4f95ff36a4f9"
    sso = SingleSignOn.parse(request.query_string, secret)
    sso.email = current_user.email # from devise
    sso.name = current_user.full_name # this is a custom method on the User class
    sso.username = current_user.username # from devise
    sso.external_id = current_user.id # from devise
    sso.avatar_url = current_user.avatar.url
    sso.sso_secret = secret

    redirect_to sso.to_url("http://discuss.notarea51.com/session/sso_login")
  end
end
