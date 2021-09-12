  
class MessageChannel < ApplicationCable::Channel
    def subscribed
      # user = User.find(params[:user_id])
      # stream_for user
      stream_from "message_channel"
  
      # you can send all messages when you subscribe like below
      all_messages = Message.all
      ActionCable.server.broadcast("message_channel", {type: "all_messages", messages: all_messages})
    end
  
    def send_message(data)
        new_message = Message.create(content: data["content"])
        # user = User.find(params[:user_id])
        # ActionCable.server.broadcast_to(user, {type: "new_message", new_message: new_message})
        ActionCable.server.broadcast("message_channel", {type: "new_message", new_message: new_message})
    end
  
    def unsubscribed
    end
  end