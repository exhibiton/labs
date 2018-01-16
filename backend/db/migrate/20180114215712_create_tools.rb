class CreateTools < ActiveRecord::Migration[5.1]
  def change
    create_table :tools do |t|
      t.string :name
      t.attachment :icon
      t.timestamps
    end
  end
end
