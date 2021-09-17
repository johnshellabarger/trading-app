class CreateDirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :direct_messages do |t|
      t.references :user_a, index: true
      t.references :user_b, index: true
      
      t.timestamps
    end
  end
end
