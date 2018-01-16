require 'rails_helper'

RSpec.describe Tool, type: :model do
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }
  it { should have_and_belong_to_many(:companies) }

end
