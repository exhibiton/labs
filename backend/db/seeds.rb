# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all
User.destroy_all
company1 = Company.create(name: "Best Company1", description:"greatest company in the universe")
company2 = Company.create(name: "Best Company2", description:"greatest company in the universe")
company3 = Company.create(name: "Best Company3", description:"greatest company in the universe")
company4 = Company.create(name: "Best Company4", description:"greatest company in the universe")
company5 = Company.create(name: "Best Company5", description:"greatest company in the universe")

user1 = User.create(email: "labs1@guy.com", first_name: "Test1", last_name: "Dude", password: "12345678", company_id: company1.id)
user2 = User.create(email: "labs2@guy.com", first_name: "Test2", last_name: "Dude", password: "12345678", company_id: company2.id)
user3 = User.create(email: "labs3@guy.com", first_name: "Test3", last_name: "Dude", password: "12345678", company_id: company3.id)
user4 = User.create(email: "labs4@guy.com", first_name: "Test4", last_name: "Dude", password: "12345678", company_id: company4.id)
user5 = User.create(email: "labs5@guy.com", first_name: "Test5", last_name: "Dude", password: "12345678", company_id: company5.id)

company1.save
company2.save
company3.save
company4.save
company5.save
user1.save
user2.save
user3.save
user4.save
user5.save

user1.update_attribute :company_id, company1.id
user2.update_attribute :company_id, company2.id
user3.update_attribute :company_id, company3.id
user4.update_attribute :company_id, company4.id
user5.update_attribute :company_id, company5.id