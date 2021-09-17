import WishItem from "./WishItem"


const Wishlist = ({items, setItems}) => {

    return (
        <div>
            {items.map(item => {
                return (
                    <div className='todo-row'>
                    <WishItem item={item} allItems={items} setItems={setItems}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Wishlist
