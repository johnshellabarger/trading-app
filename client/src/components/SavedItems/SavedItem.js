import React from 'react'
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import './SavedItem.css'


const SavedItem = ({ item, savedItems, setSavedItems }) => {

    function handleRemove(){
        const newSavedItemsList = savedItems.filter(itm => itm.id !== item.id)
        setSavedItems(newSavedItemsList)
        fetch(`/saved_items/${item.id}`, {
            method: "DELETE"
        })
    }
    
    return (
        <div className='card'>
            <img className='user-item-trade-image' alt={item.title} src={item.photo}/>
            <div className='card-info'>
                <h1>{item.title}</h1>
                <h1 className='user-item-condition'>{item.condition}</h1>
                <NavLink className='details-nav-link' to={`/DetailPage/${item.item_id}`}>
                    <p className='see-details-btn'>See Details <FaAngleRight className='detail-icon'/></p>
                </NavLink> 
                    <p className='remove-btn' onClick={handleRemove}>Remove</p>
            </div>
        </div>
    )
}

export default SavedItem

{/* <NavLink onClick={handleDetails} className='details-nav-link' to={`/DetailPage/${item.id}`}>
<div className='trade-item-container'>
    <img src={item.photo} className='user-item-image'/>
    <div>
        <h1 className='item-title'>{item.title}</h1>
    </div>
</div>
</NavLink> */}