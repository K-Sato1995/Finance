class DashboardsController < ApplicationController
  def index
    @expenses = Expense.all
    @incomes = Income.all
    respond_to do |format|
      format.json { render json: { data1: @expenses, data2: @incomes } }
      format.html
    end
  end
end
