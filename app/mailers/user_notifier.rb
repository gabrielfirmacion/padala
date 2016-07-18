class UserNotifier < ActionMailer::Base
  default :from => 'gabrielfirmacion@gmail.com'

  def send_shipment_email(user, shipment)
    @user = user
    @shipment = shipment
    mail( :to => @user.email,
    :subject => 'Here are your shipment details' )
  end

  def send_copy_padala(user,shipment)
    @user = user
    @shipment = shipment
    mail( :to => "gabrielfirmacion@gmail.com",
    :subject => 'New Shipment Order' )
  end
end