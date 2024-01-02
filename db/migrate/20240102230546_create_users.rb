class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :profile_image
      t.boolean :is_admin

      t.timestamps
    end
  end
end
