import React from 'react'
import { useState, useEffect } from 'react'
import WishItemform from '../../components/WishList/WishItemform'
import WishList from '../../components/WishList/WishList'
import './WishListPage.css'

const WishlistPage = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch("/wishitems")
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [])


    return (
        <>
        <h1>Home | Wishlist</h1>
        <div className='wishlist-container'>
            <WishItemform items={items} setItems={setItems}/>
            <WishList items={items} setItems={setItems}/>
        </div>
        </>
    )
}

export default WishlistPage
