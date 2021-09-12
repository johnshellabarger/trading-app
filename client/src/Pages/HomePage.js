import TradingList from "../components/hometradelist/TradingList"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'


const HomePage = () => {
    
    const [searchInput, setSearchInput] = useState('')

    return (
        <>
            <div className='wishlist-container'>
            <form className='wishlist-form'>
                <input className='todo-input' placeholder='Search The Trading Post...' onChange={e => setSearchInput(e.target.value)}/>
                <button className='todo-button'>
                    <FaSearch className='fas'/>
                </button>
            </form>
            </div>
            <TradingList searchInput={searchInput}/>
        </>
    )
}

export default HomePage
