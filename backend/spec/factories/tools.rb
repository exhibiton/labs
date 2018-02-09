FactoryBot.define do
  factory :tool do
    name { Faker::Name.unique.name }
  end
end