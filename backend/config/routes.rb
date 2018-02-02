Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:index, :update, :create] do
    post :upload_photo
    collection do
      get :select_options
      get :search
    end
  end
  
  resources :categories, only: [:index, :create] do
    collection do
      get :select_options
    end
  end

  resources :companies
  resources :tools, only: [:index, :create] do
    collection do
      get :select_options
      get :search
    end
  end

  post 'authenticate' => 'auth#authenticate'
  post 'auth/renew_token' => 'auth#renew_token'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
