class CreateAdopts < ActiveRecord::Migration[6.0]
  def change
    create_table :adopts do |t|
      t.string :name
      t.string :address
      t.string :message
      t.references :user, null: false, foreign_key: true
      t.references :dog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
