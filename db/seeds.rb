# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Dog.destroy_all
Adopt.destroy_all
User.create(username: "Admin", email: "admin@email.com", password: "123456")
p "#{User.count} user(s) created"

Dog.create(name: "David", age: "12", sex: "male", breed:"Pariah", height:"10 inches", weight:"24 pounds", description:"something goes here", shelter:"My Shelter", image:"url", user_id: 1)
p "#{Dog.count} dog(s) created"

Adopt.create(name: "Admin", address: "admin@email.com", message: "123456", user_id:1, dog_id:1)
p "#{Adopt.count} dogs adopt(ed)"