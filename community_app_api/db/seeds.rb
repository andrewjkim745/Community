100.times do 
    Post.create(
        title: Faker::Quote.yoda,
        username: Faker::FunnyName.name,
        link: Faker::LoremFlickr.image,
        description: Faker::Lorem.sentence

    )
end

puts "Seeded database with Faker"

Comment.create(
    post_id: 1,
    username: 'Andrew',
    reply: 'YupYupYup',
    
)

puts "Seeded Comments"