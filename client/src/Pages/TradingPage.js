import React from 'react'
import UserItemList from '../components/user_trading_list/UserItemList'
import { FaCamera} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './tradingpage.css'


const TradingPage = () => {

    return (
        <div>

            <div className='trading-links-container'>
                <h3 className='post-item-link'>
                    <NavLink to="/PostPage" className='trading-nav-link'>
                    <FaCamera className='camera-icon'/>
                    Post an Item
                    </NavLink>
                </h3>
                <h3 className='archived-link'>
                    <NavLink to="/ArchivedPage" className='trading-nav-link'>
                    Archived
                    </NavLink>
                </h3>
            </div>
            <UserItemList />
        </div>
    )
}

export default TradingPage
