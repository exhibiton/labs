class AddWebsiteToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :website, :string
  end
end
