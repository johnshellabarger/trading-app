class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def index
        user = User.where("email like?", "#{params[:email]}")
        render json: user
    end
    
  
    def show
      render json: @current_user, include: [:chats]
    end

    private
  
    def user_params
      params.permit(:name, :email, :zipcode, :password)
    end
end
