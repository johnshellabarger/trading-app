import React from 'react'
import "./detailpage.css"
import { FaRegHeart, FaHeart, FaRegListAlt } from "react-icons/fa";
import { useState, useEffect } from 'react'
import Avatar from 'react-avatar';
import { useParams } from 'react-router-dom'
import Modal from "react-modal";


const DetailPage = ({ usersSavedItems }) => {

    const { id } = useParams()
    const [itemDetails, setItemDetails] = useState({})
    const [isSaved, setIsSaved] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        fetch(`/items/${id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(usersSavedItems)
            setItemDetails(data)
            usersSavedItems.map((item) => {
                console.log('saved item id:', item.item_id, 'compared id:', data.id)
                if (item.item_id === data.id){
                    return setIsSaved(true)
                }
            })
        })
    }, [])


    function openModal() {
        setModalIsOpen(true);
      }
    
    function closeModal() {
        setModalIsOpen(false);
    }

    function handleSaveItem(){
        const savedItem = {
            photo: itemDetails.photo,
            title: itemDetails.title,
            condition: itemDetails.condition,
            item_id: itemDetails.id,
            user_id: itemDetails.user.id,
        }
        setIsSaved(!isSaved)
        fetch('/saved_items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(savedItem)
        })
    }

        // usersSavedItems.map((item) => {
        //     if (item.item_id === id){
        //         setIsSaved(true)
        //     }
        // })


    return (
        <>
            <h1>Details</h1>
            <div className='details-container'>
                <div className='detail-image-container'>
                    <img className='details-image' alt={itemDetails.title} src={itemDetails.photo}/>
                </div>
                <div className='details-info-container'>
                    <h1 className='details-title'>{itemDetails.title}</h1>
                    <h1 className='details-category'>Category: {itemDetails.category}</h1>
                    <h1 className='details-condition'>Condition: {itemDetails.condition}</h1>
                    <h1 className='details-description-title'>Description</h1>
                    <p className='details-description'>{itemDetails.description}</p>

                    <div className='detail-line'></div>

                    <h1 className='posted-by-header'>Posted by: </h1>
                    <div className='user-info'>
                        <Avatar name={itemDetails.user?.name} round={true} size={40}/>
                        <h1 className='user-name'>{itemDetails.user?.name}</h1>
                    </div>
                        

                    <button className='message-user-btn'>Message User</button>
                    <div className='save-wish-list-container'>
                        { isSaved ? (<span className='saved-btn'><FaHeart /> Saved </span>) 
                        : (<span className='save-btn' onClick={handleSaveItem}><FaRegHeart /> Save </span>) }
                    
                        <p onClick={() => openModal()}className='save-btn'><FaRegListAlt /> Users Wish List </p>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            className="Modal"
                            overlayClassName="Overlay"
                            ariaHideApp={false}
                        >
                            
                            <button onClick={() => closeModal()}>close</button>
                        </Modal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailPage
