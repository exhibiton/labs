FactoryBot.define do
  factory :category do
    name { Faker::Company.buzzword }
  end
end