import React from 'react'
import "./detailpage.css"
import { FaRegHeart, FaHeart, FaRegListAlt } from "react-icons/fa";
import { useState, useEffect } from 'react'
import Avatar from 'react-avatar';
import { useParams, useHistory } from 'react-router-dom'
import Modal from "react-modal";


const DetailPage = ({ user, usersSavedItems }) => {
    const history = useHistory()
    const { id } = useParams()
    const [itemDetails, setItemDetails] = useState({})
    const [isSaved, setIsSaved] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        fetch(`/items/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setItemDetails(data)
            usersSavedItems.map((item) => {
                if (item.item_id === data.id){
                    setIsSaved(true)
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

    function handleMessageUser(userId){
        const newDM = {
            user_a_id: user.id,
            user_b_id: userId,
        }
        fetch('/direct_messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDM)
        })
        history.push("/InboxPage")
    }

    return (
        <>
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
                        

                    <button onClick={() => handleMessageUser(itemDetails.user.id)} className='message-user-btn'>Message User</button>
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
