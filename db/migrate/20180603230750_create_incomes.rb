class CreateIncomes < ActiveRecord::Migration[5.1]
  def change
    create_table :incomes do |t|
      t.string :title
      t.text :description
      t.string :category
      t.integer :amount
      t.timestamps
    end
  end
end
