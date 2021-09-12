class MessagesController < ApplicationController
    def create
      new_message = Message.create(content: params[:content])
      MessageChannel.broadcast('message_channel', {type: 'new_message', new_message: new_message})
    end
  end