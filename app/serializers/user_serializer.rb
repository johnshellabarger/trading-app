class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :zipcode
  
  has_many :items
end
