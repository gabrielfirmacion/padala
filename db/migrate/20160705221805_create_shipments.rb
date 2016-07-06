class CreateShipments < ActiveRecord::Migration
  def change
    create_table :shipments do |t|
      t.string :address
      t.string :specialrequest
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
