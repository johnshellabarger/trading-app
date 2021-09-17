import TradingList from "../components/hometradelist/TradingList"
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'


const HomePage = () => {
    
    const [searchInput, setSearchInput] = useState('')
    const [onChangeText, SetOnChangeText] = useState('')

    function handleSearch(e){
        e.preventDefault()
        setSearchInput(onChangeText)
        console.log(onChangeText)
    }

    return (
        <>
            <div className='wishlist-container'>
            <form onSubmit={handleSearch}className='wishlist-form'>
                <input className='todo-input' placeholder='Search The Trading Post...' onChange={e => SetOnChangeText(e.target.value)}/>
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
