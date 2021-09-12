import { useState } from 'react'




const InboxPage = ({ wsClient, messages }) => {
    const [content, setContent] = useState("");


    const createMessage = (e) => {
        e.preventDefault();
    
        let message = {
          command: "message",
          identifier: JSON.stringify({ channel: "MessageChannel" }),
          data: JSON.stringify({
            action: "send_message",
            content: content,
          }),
        };
    
        wsClient.send(JSON.stringify(message));
        setContent("");
      };

      
    return (
        <div>
            <h1>Messages</h1>
            {messages.map((m) => (
                <p key={m.id}>{m.content}</p>
            ))}
            <form onSubmit={createMessage}>
                <label htmlFor="content" />
                <input
                type="text"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default InboxPage
