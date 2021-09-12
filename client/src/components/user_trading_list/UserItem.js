
const UserItem = ({ item, allItems, setItems }) => {


    
    const handleTraded = (tradedItem) => {

        const updatedItem = {
            photo: item.photo,
            title: item.title,
            category: item.category,
            condition: item.condition,
            description: item.description,
            sold: true
          }

        const newList = allItems.filter(allItems=> allItems.id !== tradedItem.id)

        setItems(newList)
        console.log(tradedItem)
        fetch(`/items/${item.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        })
    }

    return (
        
        <div className='card'>
            <img src={item.photo} alt={item.title} className='user-item-trade-image'/>
            <div className='card-info'>
                <h1>{item.title}</h1>
                <h1 className='user-item-condition'>{item.condition}</h1>
            <button className='mark-as-traded-btn' onClick={() => handleTraded(item)}>Mark as Traded</button>
            </div>
        </div>
        
    )
}

export default UserItem
