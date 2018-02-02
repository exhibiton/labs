class Category < ApplicationRecord
  has_and_belongs_to_many :companies
  validates_presence_of :name
end
