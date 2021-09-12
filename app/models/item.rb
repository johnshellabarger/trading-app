class Item < ApplicationRecord
    belongs_to :user 

    validates :photo, presence: true
    validates :title, presence: true
    validates :category, presence: true
    validates :condition, presence: true
    validates :description, presence: true

end
