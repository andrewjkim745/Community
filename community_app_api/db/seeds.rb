100.times do 
    Post.create(
        title: Faker::Quote.yoda,
        username: Faker::FunnyName.name,
        link: Faker::LoremFlickr.image,
        description: Faker::Lorem.sentence

    )
end

puts "Seeded database with Faker"