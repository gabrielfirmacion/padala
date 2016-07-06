class HomeController < ApplicationController

before_action :authenticate_user!

  def index
    @user = current_user
  end

  def create
    @shipment = Shipment.new(shipment_params)
    @shipment.save

    redirect_to '/'
  end

  private
    def shipment_params
      params.require(:shipment).permit(:address, :specialrequest, :user_id)
    end

end
