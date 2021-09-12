class ItemSerializer < ActiveModel::Serializer
  attributes :id, :photo, :title, :category, :condition, :description, :sold, :user

  belongs_to :user 
end
