class CreateData < ActiveRecord::Migration[5.0]
  def change
    create_table :data do |t|
      t.string :month
      t.integer :profits
      t.integer :inventory

      t.timestamps
    end
  end
end
