class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # validations
  validates_presence_of :email, :first_name, :last_name

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def company
    company_id ? Company.find(company_id) : nil
  end

  # credit:
  # https://github.com/plataformatec/devise/wiki/How-To:-Find-a-user-when-you-have-their-credentials
  def self.authenticate(email, password)
    user = User.find_for_authentication(email: email)
    (user && user.valid_password?(password)) ? user : nil
  end

  def authentication_payload
    return nil if new_record?
    fields = %w(id email first_name last_name avatar)
    attributes_hash = attributes.slice(*fields).with_indifferent_access
    token = AuthToken.encode(attributes_hash)
    { auth_token: token }
  end


end
