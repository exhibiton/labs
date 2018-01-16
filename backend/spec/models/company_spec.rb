require 'rails_helper'

RSpec.describe Company, type: :model do
  # Association test
  # ensure Company model has a 1:m relationship with the Item model
  it { should have_many(:users) }
  it { should have_and_belong_to_many(:tools) }
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }

  context 'with users' do
    let!(:user) { create :user }
    let!(:company) { create :company }
    before do
      company.users << user
    end


    it 'creates the company with for an user' do
      expect(company.users.count).to eq 1
    end

  end
end
