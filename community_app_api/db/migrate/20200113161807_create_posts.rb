class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :username
      t.string :link
      t.string :description
      t.integer :views
      t.integer :votes

      t.timestamps
    end
  end
end
