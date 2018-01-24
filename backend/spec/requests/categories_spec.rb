require 'rails_helper'

RSpec.describe 'Categories', type: :request do

  # create test users
  let!(:categories) { create_list(:category, 10) }
  let(:user) { create(:user) }
  let(:company) {
    create(:company) do |company|
      company.users << user
    end
  }
  # authorize request
  let(:headers) { { 'Authorization' => token_generator(user.id) } }

  # Test suite for GET /categories
  describe 'GET /categories' do
    # make HTTP get request before each example
    before { get '/categories', params: {}, headers: headers }

    it 'returns categories' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
  describe 'Get /categories without authtoken' do
    before { get '/categories', params: {} }

    it 'will not return categories' do
      expect(json['errors']).to eq('Not authorized')
    end

    it 'returns status code 401' do
      expect(response).to have_http_status(401)
    end

  end

  # Test suite for POST /categories
  describe 'POST /categories' do

    let(:valid_attributes) do
      { name: 'SaaS',
        company_id: company.id
      }
    end

    let(:invalid_attributes) do
      { 
        company_id: company.id
      }
    end

    context 'when the request is valid' do
      before { post '/categories', params: valid_attributes, headers: headers }

      it 'creates a category with a company' do
        expect(json['name']).to eq('SaaS')
        expect(json['companies'].size).to eq 1
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

    end

    context 'when the request is invalid' do
      before { post '/categories', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end

  end



end
