class CreateJoinTableCompaniesTools < ActiveRecord::Migration[5.1]
  def change
    create_join_table :companies, :tools do |t|
      t.index :company_id
      t.index :tool_id
    end
  end
end
