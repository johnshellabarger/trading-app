import React from 'react'
import { useState, useEffect } from 'react' 
import SavedItem from './SavedItem'

const SavedList = () => {

    const [savedItems, setSavedItems] = useState({})

    useEffect(() => {
        fetch("/saved_items")
        .then(data => data.json())
        .then(data => setSavedItems(data))
    },[] )

    return (
        <div className='saved-glass'>
            {savedItems.length > 0 ? 
                (savedItems.map(item => {
                    return (
                        <SavedItem key={item} item={item} savedItems={savedItems} setSavedItems={setSavedItems}/>
                    )
                })) : (null)}
        </div>
    )
}

export default SavedList
