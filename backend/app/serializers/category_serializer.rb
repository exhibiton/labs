class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  # model association
  has_many :companies
end
