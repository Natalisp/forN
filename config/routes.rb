Rails.application.routes.draw do

root to: 'welcome#index'
get 'data', to: 'data#data',  :defaults => { :format => 'json' }


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
