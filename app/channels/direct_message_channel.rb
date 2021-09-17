class DirectMessageChannel < ApplicationCable::Channel

    def subscribed
       direct_message = DirectMessage.find(params[:direct_message_id])
       stream_for direct_message
       broadcast_to(direct_message, {type: 'all_messages', messages: direct_message.messages}) 
    end

    def send_message(data)
        new_message = Message.create(user_id: data["user_id"], content: data["content"], direct_message_id: data["direct_message_id"])
        direct_message = DirectMessage.find(params[:direct_message_id])
        broadcast_to(direct_message, {type: 'new_message', message: new_message}) 

    end

end
