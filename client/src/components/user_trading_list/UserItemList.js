import { useState, useEffect } from 'react'
import UserItem from './UserItem'
import './UserItemList.css'

const UserItemList = () => {

    const [items,setItems] = useState([])

    useEffect(() => {
        fetch("/items")
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, [setItems])
    
    return (
        <div className='glass'>
            <div className='container-width'>
                <div className='user-trade-items-container'>
                    {items.length > 0 ? 
                    (items.map(item => {
                        if (item.sold === false) {
                            return (
                                <UserItem 
                                    key={item.id}
                                    item={item}
                                    allItems={items}
                                    setItems={setItems}
                                />
                            )
                        }
                    })) : (null)}
                </div>
            </div>
        </div>
    )
}

export default UserItemList


// {items.length > 0 ? 
//     (items.map(item => {
//         return (
//             <UserItem 
//                 key={item.id}
//                 item={item}
//                 allItems={items}
//                 setItems={setItems}
//             />
//         )

//     })) : (null)}