class DirectMessagesController < ApplicationController
  skip_before_action :authorize, only: :create
    
  def create
    new_chat = DirectMessage.create!(direct_message_params)
    render json: new_chat, status: :created
  end

  def index
    chats1 = @current_user.followee_followers
    chats2 = @current_user.follower_follows
    render json: chats1 + chats2, status: :ok
  end

  private

  def direct_message_params
    params.permit(:user_a_id, :user_b_id)
  end
end
