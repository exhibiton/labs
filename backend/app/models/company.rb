class Company < ApplicationRecord
  # model association
  has_many :users
  has_and_belongs_to_many :tools

  # validations
  validates_presence_of :name, :description

  has_attached_file :logo, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://cdn.playven.com/weworklabs.png"
  validates_attachment_content_type :logo, content_type: /\Aimage\/.*\z/

end
