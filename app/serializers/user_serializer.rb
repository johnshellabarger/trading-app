class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :zipcode, :chats
  
  has_many :items
end
