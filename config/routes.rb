Rails.application.routes.draw do

  resources :data
root to: 'welcome#index'

get 'data', to: "welcome#data"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end