class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :updated_at, :logo

  # model association
  has_many :users
  has_many :tools
end
