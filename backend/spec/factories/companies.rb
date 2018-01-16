FactoryBot.define do
  factory :company do
    name { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
  end
end
