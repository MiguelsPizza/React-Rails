# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  # movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  # Character.create(name: 'Luke', movie: movies.first)

  people = ["jane", "steve", "Mike Honcho"]
  description = ["I love to code", "I love to eat", "I love to sleep"]

  for i in (0..2)
    Person.create(name: people[i], about: description[i])
  end
