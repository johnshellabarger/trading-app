import { useState, useEffect } from 'react'
import TradedItem from '../components/TradedItem/TradedItem'


const ArchivedPage = () => {
    const [tradedItems, setTradedItems] = useState([])

    useEffect(() => {
        fetch("/items")
        .then(resp => resp.json())
        .then(data => setTradedItems(data))
    }, [setTradedItems])
    
    
    return (
        <div>
            <h1>Archived</h1>
            <div className='glass'>
                {tradedItems.length > 0 ? 
                    (tradedItems.map(item => {
                        if (item.sold === true) {
                            return (
                                <TradedItem item={item} tradedItems={tradedItems} setTradedItems={setTradedItems}/>
                            )
                        }
                    })) : (null)
                }
            </div>
        </div>
    )
}

export default ArchivedPage
