import "./TradedItem.css"

const TradedItem = ({item, tradedItems, setTradedItems}) => {

    function handleDeleteItem(){
        const newItems = tradedItems.filter(tradedItems => tradedItems.id !== item.id)
        fetch(`/items/${item.id}`, {
            method: "DELETE"
        })
        setTradedItems(newItems)
    }

    return (
            <div className='container-width'>
                <div className='user-trade-items-container'>
                <div className='archived-card'>
                        <img src={item.photo} alt={item.title} className='user-item-trade-image'/>
                        <div className='card-info'>
                            <h1>{item.title}</h1>
                            <p className='traded'>Traded</p>
                            <button onClick={handleDeleteItem}className='remove-item-btn'>Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TradedItem
