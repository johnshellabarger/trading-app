import { NavLink } from "react-router-dom";

const TradeItem = ({ item }) => {

    
    return (
        <NavLink className='details-nav-link' to={`/DetailPage/${item.id}`}>
            <div className='trade-item-container'>
                <img src={item.photo} alt={item.title} className='user-item-image'/>
                <div>
                    <h1 className='item-title'>{item.title}</h1>
                </div>
            </div>
        </NavLink>
    )
}

export default TradeItem
