require 'rails_helper'

RSpec.describe User, type: :model do
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
end
