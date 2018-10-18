class IncomesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    incomes = Income.all
    render json: { status: 'SUCCESS', message: 'Loaded the income', data: incomes }, status: :ok
  end

  def show
    income = Income.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded the income', data: income }, status: :ok
  end

  def create
    income = Income.new(income_params)
    render json: { data: income } if income.save
  end

  def destroy
    income = Income.find(params[:id])
    income.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the income', data: income }, status: :ok
  end

  def update
    income = Income.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Updated the income', data: income }, status: :ok if income.update(income_params)
  end

  private
  def income_params
    params.require(:income).permit(:title, :description, :category, :amount, :date)
  end
end
