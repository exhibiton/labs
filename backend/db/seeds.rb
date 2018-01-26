# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Company.destroy_all
Tool.destroy_all
Category.destroy_all
company1 = Company.create(name: "Best Company1", description:"greatest company in the universe")
company2 = Company.create(name: "Best Company2", description:"greatest company in the universe")
company3 = Company.create(name: "Best Company3", description:"greatest company in the universe")
company4 = Company.create(name: "Best Company4", description:"greatest company in the universe")
company5 = Company.create(name: "Best Company5", description:"greatest company in the universe")

user1 = User.create(email: "labs1@guy.com", title:"Co-Founder", first_name: "Test1", last_name: "Dude", password: "12345678", company_id: company1.id)
user2 = User.create(email: "labs2@guy.com", title:"Co-Founder", first_name: "Test2", last_name: "Dude", password: "12345678", company_id: company2.id)
user3 = User.create(email: "labs3@guy.com", title:"Co-Founder", first_name: "Test3", last_name: "Dude", password: "12345678", company_id: company3.id)
user4 = User.create(email: "labs4@guy.com", title:"Co-Founder", first_name: "Test4", last_name: "Dude", password: "12345678", company_id: company4.id)
user5 = User.create(email: "labs5@guy.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678", company_id: company5.id)
usernocompany = User.create(email: "user1@nocompany.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany2 = User.create(email: "user2@nocompany.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany3 = User.create(email: "user3@nocompany.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany4 = User.create(email: "user4@nocompany.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678")
usernocompany5 = User.create(email: "user5@nocompany.com", title:"Co-Founder", first_name: "Test5", last_name: "Dude", password: "12345678")

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
tool6 = Tool.create(name: "Amazon RDS")
tool7 = Tool.create(name: "Amazon EC2")
tool8 = Tool.create(name: "SCSS")
tool9 = Tool.create(name: "MongoDB")
tool10 = Tool.create(name: "Ruby")
tool11 = Tool.create(name: "Java")
tool12 = Tool.create(name: "Clojure")
tool13 = Tool.create(name: "Haskell")
tool14 = Tool.create(name: "C++")
tool15 = Tool.create(name: "Swift")
tool16 = Tool.create(name: "Objective-C")
tool17 = Tool.create(name: "Kotlin")
tool18 = Tool.create(name: "jQuery")
tool19 = Tool.create(name: "CSS")
tool20 = Tool.create(name: "Apache")

tool1.save
tool2.save
tool3.save
tool4.save
tool5.save
tool6.save 
tool7.save
tool8.save
tool9.save
tool10.save
tool11.save
tool12.save
tool13.save
tool14.save
tool15.save
tool16.save
tool17.save
tool18.save
tool19.save
tool20.save

category1 = Category.create(name:"SaaS")
category2 = Category.create(name:"Marketplace")
category3 = Category.create(name:"EdTech")
category4 = Category.create(name:"FinTech")
category5 = Category.create(name:"Blockchain")

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

category1.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
category2.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
category3.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
category4.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]
category5.update_attribute :company_ids, [company1.id, company2.id, company3.id, company4.id, company5.id]