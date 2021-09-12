import { FaTimes } from "react-icons/fa";

const WishItem = ({item, allItems, setItems }) => {

    function handleDelete(){
        const newList = allItems.filter(itm => itm.id !== item.id)
        setItems(newList)
        fetch(`/wishitems/${item.id}`, {
            method: "DELETE"
        })
    }
    
    return (
        <div className='item-container'>
            <div className='to-do'>• {item.item_name}</div>
            <button className='delete-item-btn' onClick={handleDelete}><FaTimes /></button>
        </div>
    )
}

export default WishItem
