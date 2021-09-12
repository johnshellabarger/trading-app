class SavedItemSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :condition, :item_id, :user_id

end
