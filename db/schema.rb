# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_13_190646) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "direct_messages", force: :cascade do |t|
    t.bigint "user_a_id"
    t.bigint "user_b_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_a_id"], name: "index_direct_messages_on_user_a_id"
    t.index ["user_b_id"], name: "index_direct_messages_on_user_b_id"
  end

  create_table "items", force: :cascade do |t|
    t.boolean "sold"
    t.string "photo"
    t.string "title"
    t.string "category"
    t.string "condition"
    t.string "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_items_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "direct_message_id"
    t.bigint "user_id"
    t.index ["direct_message_id"], name: "index_messages_on_direct_message_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "saved_items", force: :cascade do |t|
    t.string "photo"
    t.string "title"
    t.string "condition"
    t.bigint "item_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_saved_items_on_item_id"
    t.index ["user_id"], name: "index_saved_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "name"
    t.integer "zipcode"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wishitems", force: :cascade do |t|
    t.string "item_name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_wishitems_on_user_id"
  end

  add_foreign_key "items", "users"
  add_foreign_key "messages", "direct_messages"
  add_foreign_key "messages", "users"
  add_foreign_key "saved_items", "items"
  add_foreign_key "saved_items", "users"
  add_foreign_key "wishitems", "users"
end
