# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Company.destroy_all
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
usernocompany = User.create(email: "user1@nocompany.com", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany2 = User.create(email: "user2@nocompany.com", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany3 = User.create(email: "user3@nocompany.com", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany4 = User.create(email: "user4@nocompany.com", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany5 = User.create(email: "user5@nocompany.com", first_name: "Test5", last_name: "Dude", password: "12345678")

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

tool1 = Tool.create(name: "JavaScript")
tool2 = Tool.create(name: "React")
tool3 = Tool.create(name: "React Native")
tool4 = Tool.create(name: "Ember")
tool5 = Tool.create(name: "Vue")

tool1.save
tool2.save
tool3.save
tool4.save
tool5.save

user1.update_attribute :company_id, company1.id
user2.update_attribute :company_id, company2.id
user3.update_attribute :company_id, company3.id
user4.update_attribute :company_id, company4.id
user5.update_attribute :company_id, company5.id

tool1.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
tool2.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
tool3.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
tool4.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
tool5.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]