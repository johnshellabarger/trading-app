class User < ApplicationRecord
    has_secure_password

    has_many :saved_items, dependent: :destroy
    has_many :items, dependent: :destroy 
    has_many :wishitems, dependent: :destroy

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
