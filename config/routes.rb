Rails.application.routes.draw do
  resources :messages
  resources :saved_items
  resources :wishitems
  resources :items
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get "/allItems", to: "items#all_items"

  mount ActionCable.server => '/cable'
end
