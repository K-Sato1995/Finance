Rails.application.routes.draw do
  root 'dashboards#index'
  resources :expenses
  resources :incomes

  get '/Dashboard' => 'dashboards#index'
  get '/Expense' => 'dashboards#index'
  get '/ConstantExpense' => 'dashboards#index'
  get '/Income' => 'dashboards#index'
end
