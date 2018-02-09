require 'rails_helper'

RSpec.describe 'Tools', type: :request do

  # create test users
  let!(:tools) { create_list(:tool, 10) }
  let(:user) { create(:user) }
  let(:company) {
    create(:company) do |company|
      company.users << user
    end
  }
  # authorize request
  let(:headers) { { 'Authorization' => token_generator(user.id) } }

  # Test suite for GET /tools
  describe 'GET /tools' do
    # make HTTP get request before each example
    before { get '/tools', params: {}, headers: headers }

    it 'returns tools' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'Get /tools without authtoken' do
    before { get '/tools', params: {} }

    it 'will not return tools' do
      expect(json['errors']).to eq('Not authorized')
    end

    it 'returns status code 401' do
      expect(response).to have_http_status(401)
    end

  end

  # Test suite for POST /tools
  describe 'POST /tools' do

    let(:file) { fixture_file_upload('test_image.png', 'image/png') }

    let(:valid_attributes) do
      { name: 'React',
        icon: file,
      }
    end

    let(:invalid_attributes) do
      { icon: file,
        company_id: company.id
      }
    end

    context 'when the request is valid' do
      before { post '/tools', params: valid_attributes, headers: headers }

      it 'creates a tool' do
        expect(json['name']).to eq('React')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

    end

    context 'when the request is invalid' do
      before { post '/tools', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end

  end

end
