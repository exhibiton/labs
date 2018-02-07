class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :updated_at, :logo, :website

  # model association
  has_many :users
  has_many :tools
  has_many :categories
end
