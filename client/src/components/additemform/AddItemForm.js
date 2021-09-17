import "./additemform.css"
import React from 'react'
import { useState } from 'react'
import { storage } from "../../firebase/firebase"
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const AdditemForm = () => {
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [condition, setCondition ] = useState( "" );
    const [description, setDescription] = useState("")
    // const [errors, setErrors] = useState([]);

    const [selectedPhotoName, setSelectedPhotoName] = useState(false)

    const history = useHistory()

    const newItem = {
        photo: imageUrl, 
        title,
        category,
        condition,
        description,
        sold: false
      }

    const handleAddPost = (e) => {
        e.preventDefault();
        // setErrors([]);
        console.log(newItem)
        fetch("/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        })
        history.push("/TradingPage")
    }

    console.log('image as file', imageAsFile)
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(image)
        setSelectedPhotoName(imageAsFile.name)
    }
    
    const handleFireBaseUpload = event => {
        event.preventDefault()
        console.log('start of upload')
        // async magic goes here...
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        } else {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
            uploadTask.on('state_changed', 
                (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
                }, (err) => {
                //catches the errors
                console.log(err)
                }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                .then(fireBaseUrl => {
                    setImageUrl(fireBaseUrl)
                })
            })
        }
    }
    
    return (
        <>
        <div className='add-item-container'>
        
        <div className='container'>
            <div className='wrapper'>
                <div className='image'>
                {imageUrl ? (<img src={imageUrl} alt={imageAsFile.name}className='uploaded-item-photo'/>) : (null)}
                </div>
                <div className='content'>
                    <div className='icon'><FaCloudUploadAlt /></div>
                    {selectedPhotoName ? (<div className='text'>{selectedPhotoName}</div>) : (<div className='text'>No image selected</div>)}
                </div>
                <div className='cancel-btn'><FaTimes /></div>
            </div>

            <form onSubmit={handleFireBaseUpload}>
            <label className="custom-file-upload"> SELECT A PHOTO
                <input 
                    id='file-upload'
                    className='addItem-input'
                    type='file'
                    onChange={handleImageAsFile}
                />
            </label>
                <button className='add-photo-btn'>ADD PHOTO</button>
            </form>
        </div>


        <div className='add-item-form-container'>
        

            <form onSubmit={handleAddPost}>

                <div>
                    <label className="username-label">Title</label>
                    <input 
                        type='text'
                        className='addItem-input'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="username-label">Category</label>
                    <select className='addItem-input' onChange={(e) => setCategory(e.target.value)}>
                        <option value=""> - Select - </option>
                        <option value="Business equpiment">Business equpiment</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics & Media">Electronics & Media</option>
                        <option value="Home & Garden">Home & Garden</option>
                        <option value="Toys, Games, & Hobbies">Toys, Games, & Hobbies</option>
                        <option value="Pet supplies">Pet supplies</option>
                        <option value="Tickets">Tickets</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="username-label">Condition</label>
                    <select className='addItem-input' onChange={(e) => setCondition(e.target.value)}>
                        <option value=""> - Select - </option>
                        <option value="New">New</option>
                        <option value="Reconditioned">Reconditioned</option>
                        <option value="Used (normal wear)">Used (normal wear)</option>
                        <option value="For parts">For parts</option>
                        <option value="Other (see description)">Other (see description)</option>
                    </select>
                </div>

                <div>
                    <label className="username-label">Description</label>
                    <input 
                        type='text'
                        className='addItem-input'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                

                <button className='post-item-btn'>POST</button>
            </form>
        </div>

        </div>
        </>
    )
}

export default AdditemForm
