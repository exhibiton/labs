require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  # create test users
  let(:user) { create(:user) }
  let(:second_user) { create(:user) }
  # authorize request
  let(:headers) { { 'Authorization' => token_generator(user.id) } }


  # Test suite for POST /users/:id/upload_photo
  describe 'POST #upload_photo' do

    let(:file) { fixture_file_upload('test_image.png', 'image/png') }

      context 'valid request with user' do
      before { post "/users/#{user.id}/upload_photo", params: { avatar: file }, headers: headers }

      it 'is successful' do
        expect(response.status).to eq(200)
      end

      it 'uploads image' do
        expect(user.reload.avatar.file?).to be_truthy
      end
    end
  end
end
