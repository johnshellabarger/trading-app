class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.boolean :sold 
      t.string :photo
      t.string :title
      t.string :category
      t.string :condition
      t.string :description
      t.belongs_to :user, foreign_key: true, null: false 

      t.timestamps
    end
  end
end
