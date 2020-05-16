# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_15_150926) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adopts", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "message"
    t.bigint "user_id", null: false
    t.bigint "dog_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_adopts_on_dog_id"
    t.index ["user_id"], name: "index_adopts_on_user_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "sex"
    t.string "age"
    t.string "breed"
    t.string "height"
    t.string "weight"
    t.string "description"
    t.string "shelter"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "adopts", "dogs"
  add_foreign_key "adopts", "users"
  add_foreign_key "dogs", "users"
end
