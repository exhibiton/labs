require 'rails_helper'

RSpec.describe 'Auth API', type: :request do
  let(:password) { 'supersecret123' }
  let(:user) { create :user, password: password, password_confirmation: password }

  # Test suite for POST /authenticate
  describe 'POST /authenticate' do

    #valid payload
    let(:valid_attributes) { { email: user.email, password: password } }

    context 'when the request is valid' do
      before { post '/authenticate', params: valid_attributes }
        let(:parsed_response) { JSON.parse(response.body).with_indifferent_access }
        let(:response_auth_token) { parsed_response['auth_token'] }
        let(:decoded_auth_token) { AuthToken.decode(response_auth_token) }

        it 'authenticates user' do
          expect(decoded_auth_token).to include user.attributes.slice(:id, :email, :first_name, :last_name)
        end
    end
  end
end
