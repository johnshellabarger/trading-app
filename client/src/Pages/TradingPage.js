import React from 'react'
import UserItemList from '../components/user_trading_list/UserItemList'
import { FaCamera} from "react-icons/fa"
import { NavLink } from "react-router-dom"
import './tradingpage.css'

const links = "Home < Trading"

const TradingPage = () => {

    return (
        <div>
            <h1>{links}</h1>
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
