class ToolSerializer < ActiveModel::Serializer
  attributes :id, :name, :icon

  # model association
  has_many :companies
end
