Rails.application.routes.draw do
  # post 'people/create'
  # get 'people/index'
  # get 'people/destroy/:id' => 'people#destroy'
  resources :people, only: [:index, :create, :destroy, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
end
