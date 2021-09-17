import { useState, useRef, useEffect} from 'react'
import Avatar from 'react-avatar';
import "./InboxPage.css"

const InboxPage = ({ user}) => {
    
    const client = useRef(null);
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState("");
    const [dmId, setDmId] = useState("");

    const [chats, setChats] = useState([])

    const [clickedName, setClickedName] = useState('')

    

    useEffect(() => {
      fetch(`/direct_messages`)
      .then(resp => resp.json())
      .then(data => setChats(data))
    }, [])


    const subscribeToChat = (e, direct_message_id) => {
        setClickedName(e.target.innerHTML)
        setDmId(direct_message_id);
        if (client.current){
            client.current.close() 
            client.current = null
        }


        if (!client.current) {
          let socketClient = new WebSocket("ws://localhost:3000/cable");
          client.current = socketClient;
    
          socketClient.onopen = (e) => {
            console.log(e);
            let message = {
              command: "subscribe",
              identifier: JSON.stringify({
                channel: "DirectMessageChannel",
                direct_message_id,
              }),
            };
    
            socketClient.send(JSON.stringify(message));
          };
    
          socketClient.onmessage = (e) => {
            const serverResponse = JSON.parse(e.data);
            if (serverResponse.type === "ping") return;
            console.log(serverResponse)
    
            const data = serverResponse.message;
            if (data && data.type === "all_messages") {
                console.log(data.message);
              setMessages(data.messages);
            }
            if (data && data.type === "new_message") {
              console.log(data.message);
              setMessages((messages) => [...messages, data.message]);
            }
          };




        } 
      };


      const createMessage = (e) => {
        e.preventDefault();
    
        let message = {
          command: "message",
          identifier: JSON.stringify({
            channel: "DirectMessageChannel",
            direct_message_id: dmId,
          }),
          data: JSON.stringify({
            action: "send_message",
            content,
            direct_message_id: dmId,
            user_id: user.id,
          }),
        };
    
        client.current.send(JSON.stringify(message));
        setContent("");
      };

    return (
        <div>


        <div className="chat-container">
            <div className="menu">
                <div className="friends-container">
                    <div className='chat-room-header'>Messages</div>    
                    <ul className="friends-list">
                        <li className="friend"></li>
                    </ul>

                    {chats.map(chat => {
                    if (chat.user_b.name === user.name){
                        return <span key={chat.id} className='chat-rooms' onClick={(e) => subscribeToChat(e, chat.id)}><Avatar className='inbox-avatars' name={chat.user_a.name} round={true} size={30}/><p className='user-chat-name'>{chat.user_a.name}</p></span>
                    } else {
                        return <span key={chat.id} className='chat-rooms' onClick={(e) => subscribeToChat(e, chat.id)}><Avatar className='inbox-avatars' name={chat.user_b.name} round={true} size={30}/><p className='user-chat-name'>{chat.user_b.name}</p></span>
                    }
               
                    })
                    }
                </div>

                </div>
                <div className="chatbox">
                <div className="conversation">

                {clickedName ? (<div className='chatbox-header'><Avatar className='header-avatar' name={clickedName} round={true} size={40}/><h4>Chat with {clickedName}</h4> </div>) : (null)}
                
                <div className='message-container'> 
                {messages.map((mes) => {
                    if(mes.user_id === user.id){
                        return(
                            <>
                            {/* <Avatar className='message-avatar-user' name={user.name} round={true} size={23}/> */}
                            <div key={mes.id} className='reply'>{mes.content}</div>
                            </>
                        )
                    } else {
                        return(
                            <>
                            {/* <Avatar className='message-avatar-other-user' name={clickedName} round={true} size={23}/> */}
                            <div key={mes.id} className='message'>{mes.content}</div>
                            </>
                        )
                    }
                })}

                </div>

                </div>
                <div className="sms-box">
                    <div className='sms-send-container'>
                        <form className='sms-form'onSubmit={createMessage}>
                        <label htmlFor="content" />
                        <input
                            type="text"
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            className="sms-send"
                        />
                        <button className="send">Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>


        </div>
    )
}

export default InboxPage
