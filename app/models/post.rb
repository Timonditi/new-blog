class Post < ApplicationRecord
    belongs_to :user

    # has_many :comments

    validates :title, presence: true, uniqueness: true
    validates :image, presence: true
    validates :content, presence: true
    validates :user_id, presence: true
end
