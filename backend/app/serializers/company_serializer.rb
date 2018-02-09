class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :updated_at, :logo, :website, :auth_token

  def auth_token
    current_user.authentication_payload[:auth_token]
  end

  # model association
  has_many :users
  has_many :tools
  has_many :categories
end
