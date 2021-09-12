class CreateWishitems < ActiveRecord::Migration[6.1]
  def change
    create_table :wishitems do |t|
      t.string :item_name
      t.belongs_to :user, foreign_key: true, null: false 
      t.timestamps
    end
  end
end
