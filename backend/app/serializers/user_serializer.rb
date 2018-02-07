class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :title, :avatar, :created_at, :updated_at, :github, :twitter, :linkedin, :facebook

  # model association
  has_one :company
end
