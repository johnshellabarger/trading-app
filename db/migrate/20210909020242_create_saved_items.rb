class CreateSavedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_items do |t|
      t.string :photo
      t.string :title
      t.string :condition
      t.references :item, foreign_key: true, null: false 
      t.belongs_to :user, foreign_key: true, null: false 
      t.timestamps
    end
  end
end
