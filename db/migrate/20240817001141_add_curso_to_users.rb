class AddCursoToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :curso, :string
  end
end
