class WishitemsController < ApplicationController
    wrap_parameters format: []

    
    
    def index
        items = @current_user.wishitems.all 
        render json: items 
    end

    def show
       wishlist = Wishlist.where(user_id: params[user_id])
       render json: wishlist, status: :ok 
    end

    def create
        item = @current_user.wishitems.create!(wishitems_params)
        render json: item, status: :created 
    end

    def destroy 
        item = @current_user.wishitems.find_by(id: params[:id])
        item.destroy 
        head :no_content 
    end


private

    def wishitems_params
        params.permit(:item_name, :user_id)
    end
end
