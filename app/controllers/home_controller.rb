class HomeController < ApplicationController

before_action :authenticate_user!

  def index
    @user = current_user
  end

  def create
    @shipment = Shipment.new(shipment_params)
    @shipment.save
    create_items(@shipment)
    UserNotifier.send_shipment_email(current_user, @shipment).deliver_now
    UserNotifier.send_copy_padala(current_user, @shipment).deliver_now

    redirect_to '/'
  end

  private
    def shipment_params
      params.require(:shipment).permit(:address, :specialrequest, :user_id)
    end

    def create_items(shipment)
      params[:items].each do |item|
        item = Item.new(name: item[1]["name"], description: item[1]["description"], quantity: item[1]["quantity"], shipment_id: shipment.id)
        item.save
      end
    end

end
