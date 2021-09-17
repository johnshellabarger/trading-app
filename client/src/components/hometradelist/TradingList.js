import React from 'react'
import { useState, useEffect } from 'react'
import TradeItem from './TradeItem'
import './tradelist.css'

const TradingList = ({setSelectedItem, searchInput}) => {

    const [items,setItems] = useState([])

    useEffect(() => {
        fetch("/allItems")
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [])


    return (
        <div className='trade-item-wrapper'>
            {items.length > 0 ? 
                    (items.map(item => {
                        if (item.sold === false && item.title.toLowerCase().includes(searchInput?.toLowerCase())) {
                            return (
                                <TradeItem item={item}/>
                            )
                        }
                    })) : (null)}
        </div>
    )
}

export default TradingList
