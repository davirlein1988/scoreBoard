Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  get 'fight_score' => 'welcome#fight_score'
  post 'fight_score' => 'welcome#create_score'
end
