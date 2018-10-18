class ExpensesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    expenses = Expense.all
    render json: { status: 'SUCCESS', message: 'Loaded constant expenses', data: expenses }, status: :ok
  end

  def show
    expense = Expense.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded the expense', data: expense }, status: :ok
  end

  def create
    expense = Expense.new(expense_params)
    render json: { data: expense } if expense.save
  end

  def destroy
    expense = Expense.find(params[:id])
    expense.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the expense', data: expense }, status: :ok
  end

  def update
    expense = Expense.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Updated the expense', data: expense }, status: :ok if expense.update(expense_params)
  end

  private
  def expense_params
    params.require(:expense).permit(:title, :description, :category, :amount, :date)
  end
end
