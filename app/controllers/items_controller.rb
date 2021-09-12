class ItemsController < ApplicationController
    wrap_parameters format: []
    
    def all_items
        items = Item.all.where.not(user_id: session[:user_id])
        render json: items
    end

    def index
        items = @current_user.items.all 
        render json: items, status: :ok
    end

    def show
        item = Item.find_by(id: params[:id])
        render json: item, status: :ok
    end

    def create
        item = @current_user.items.create!(item_params)
        render json: item, status: :created 
    end

    def update 
        item = @current_user.items.find_by(id: params[:id])
        item.update(item_params)
        render json: item, status: :ok 
    end

    def destroy 
        item = @current_user.items.find_by(id: params[:id])
        item.destroy 
        head :no_content 
    end

private

    def item_params
        params.permit(:photo, :title, :category, :condition, :description, :sold)
    end
end
