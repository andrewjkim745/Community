class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :userId
      t.string :username
      t.string :reply

      t.timestamps
    end
  end
end
