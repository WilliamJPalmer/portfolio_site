Rails.application.routes.draw do
  root 'mains#index'

  get '/index' => 'mains#index'
end
