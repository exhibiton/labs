class Tool < ApplicationRecord
  has_and_belongs_to_many :companies

  has_attached_file :icon, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "https://cdn.playven.com/defaulticon.png"

  # validations
  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\z/
  validates_presence_of :name

end
