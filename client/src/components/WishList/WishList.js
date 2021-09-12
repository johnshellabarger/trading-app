import WishItem from "./WishItem"


const Wishlist = ({items, setItems}) => {

    return (
        <div>
            {items.map(item => {
                return (
                    <WishItem item={item} allItems={items} setItems={setItems}/>
                )
            })}
        </div>
    )
}

export default Wishlist
