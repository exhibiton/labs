FactoryBot.define do
  factory :tool do
    name { Faker::ProgrammingLanguage.name }
  end
end