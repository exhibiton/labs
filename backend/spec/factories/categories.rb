FactoryBot.define do
  factory :category do
    name { Faker::Company.unique.buzzword }
  end
end