class FightScore < ActiveRecord::Base
  validates :name, presence: true
  validates :score, presence: true

end