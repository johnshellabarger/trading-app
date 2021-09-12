class SavedItemsController < ApplicationController
    wrap_parameters format: []
    
    def index
        saved_items = @current_user.saved_items.all 
        render json: saved_items 
    end

    def create
        saved_item = @current_user.saved_items.create!(saved_item_params)
        render json: saved_item, status: :created 
    end
    
    def destroy 
        saved_item = @current_user.saved_items.find_by(id: params[:id])
        saved_item.destroy 
        head :no_content 
    end



private

    def saved_item_params
        params.permit(:photo, :title, :condition, :item_id, :user_id)
    end
end
