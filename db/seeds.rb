# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb

# Crie um usuário com os atributos fornecidos
User.create!(
  email: 'tang@gmail.com',
  username: 'tang',
  curso: 'Ciência da Computação',
  password: '123456',
  password_confirmation: '123456'
)

User.create!(
  email: 'ausberto@gmail.com',
  username: 'bebeto',
  curso: 'Matemática',
  password: '123456',
  password_confirmation: '123456'
)