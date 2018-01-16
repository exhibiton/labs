FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user-#{n}@test.com" }
    password "testpassword"
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    title { Faker::Name.title }
  end
end