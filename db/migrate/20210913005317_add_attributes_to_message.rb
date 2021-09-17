class AddAttributesToMessage < ActiveRecord::Migration[6.1]
  def change
    add_reference :messages, :direct_message, foreign_key: true 
    add_reference :messages, :user, foreign_key: true 
  end
end
