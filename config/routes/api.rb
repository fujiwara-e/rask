# frozen_string_literal: true

namespace :api, defaults: { format: 'json' } do
  get 'welcome', to: 'welcome#index'
  resources :tasks, only: %i[index show create update destroy]
end
