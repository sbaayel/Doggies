class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :sex
      t.string :age
      t.string :breed
      t.string :height
      t.string :weight
      t.string :description
      t.string :shelter
      t.string :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
