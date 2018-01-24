require 'rails_helper'

RSpec.describe 'Companies API', type: :request do

  # create test user
  let(:user) { create(:user) }
  let(:second_user) { create(:user) }
  # authorize request
  let(:headers) { valid_headers }

  # initialize test data
  let!(:companies) { create_list(:company, 10) }
  let(:company_id) { companies.first.id }
  let(:company_with_user) {
    create(:company) do |company|
      company.users << user
    end
  }

  # Test suite for GET /companies
  describe 'GET /companies' do
    # make HTTP get request before each example
    before { get '/companies', params: {}, headers: headers }

    it 'returns companies' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /companies/:id
  describe 'GET /companies/:id' do
    before { get "/companies/#{company_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the company' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(company_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:company_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Record Not Found/)
      end
    end
  end

  # Test suite for POST /companies
  describe 'POST /companies' do

    let(:file) { fixture_file_upload('test_image.png', 'image/png') }

    # valid payload
    let(:valid_attributes) do
      # send json payload
      { name: 'WeWork Best',
        description: 'Greatest company in the universe',
        logo: file
      }
    end

    # valid payload with user
    let(:valid_attributes_with_user) do
      # send json payload
      {
          name: 'WeWork Best',
          description: 'Greatest company in the universe',
          user_id: user.id,
          logo: file
      }
    end

    context 'valid request with user' do
      before { post '/companies', params: valid_attributes_with_user, headers: headers }

      it 'creates a company' do
        expect(Company.find(json['user']['company_id']).name).to eq('WeWork Best')
        expect((json['user']).present?).to be_truthy
        expect(Company.find(json['user']['company_id']).logo.file?).to be_truthy
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

    end

    context 'when the request is valid' do
      before { post '/companies', params: valid_attributes, headers: headers }

      it 'creates a company' do
        expect(Company.find(json['user']['company_id']).name).to eq('WeWork Best')
        expect(Company.find(json['user']['company_id']).logo.file?).to be_truthy
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/companies', params: { name: 'Foobar' }.to_json, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Description can't be blank/)
      end
    end
  end

  # Test suite for PUT /companies/:id
  describe 'PUT /companies/:id' do
    let(:valid_attributes) do
      # send json payload
      { name: 'Better Name',
        new_user_id: second_user.id
      }.to_json
    end

    context 'when the record exists' do
      before { put "/companies/#{company_with_user.id}", params: valid_attributes, headers: headers }

      it 'adds another user to company' do
        expect(json['users'].size).to eq(2)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  # Test suite for DELETE /companies/:id
  describe 'DELETE /companies/:id' do
    before { delete "/companies/#{company_with_user.id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end