class CreateJoinTableCompaniesCategories < ActiveRecord::Migration[5.1]
  def change
    create_join_table :companies, :categories do |t|
      t.index :company_id
      t.index :category_id
    end
  end
end
