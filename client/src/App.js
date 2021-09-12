import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import { useState, useEffect } from 'react'
import { LogoutButton } from './components/LogoutButton';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/NavBar';
import PostPage from './Pages/PostPage';
import InboxPage from './Pages/InboxPage'
import SavedPage from './Pages/SavedPage'
import TradingPage from './Pages/TradingPage';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import ArchivedPage from './Pages/ArchivedPage';
import WishlistPage from './Pages/WishListPage/WishlistPage';
import { useRef } from 'react'



function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/saved_items").then((resp) => {
      if (resp.ok) {
        resp.json().then((items) => setUsersSavedItems(items))
      }
    })
  }, [])

  const webSocketRef = useRef(null)

  
  useEffect(() => {
    if (!webSocketRef.current){
        const wsClient = new WebSocket('ws://localhost:3000/cable');
            webSocketRef.current = wsClient
                wsClient.onopen = (e) => {
                  console.log('ws opened:', e);
                  let message = {
                    command: "subscribe",
                    identifier: JSON.stringify({ channel: "MessageChannel" }),
                  };
        
                    wsClient.send(JSON.stringify(message));
                };

                wsClient.onmessage = (e) => {
          const serverResponse = JSON.parse(e.data);
          if (serverResponse.type === "ping") return;
          console.log(serverResponse);
          const data = serverResponse.message;
          if (data && data.type === "new_message") {
            setMessages((me) => [...me, data.new_message]);
          }
    
          
          if (data && data.type === "all_messages") {
            setMessages(data.messages);
          }
        }; 
      }
  }, [])


  const [usersSavedItems, setUsersSavedItems] = useState([])
  

  if (!user) return <LoginPage setUser={setUser}/>

  return (
    <>
       <Navbar name={user.name} setUser={setUser}/>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/PostPage" exact>
            <PostPage />
          </Route>
          <Route path="/DetailPage/:id" exact>
            <DetailPage  usersSavedItems={usersSavedItems}/>
          </Route>
          <Route path="/ArchivedPage" exact>
            <ArchivedPage />
          </Route>
          <Route path="/TradingPage" exact>
            <TradingPage />
          </Route>
          <Route path="/InboxPage" exact>
            <InboxPage wsClient={webSocketRef.current} messages={messages} setMessages={setMessages}/>
          </Route>
          <Route path="/WishlistPage" exact>
            <WishlistPage />
          </Route>
          <Route path="/SavedPage" exact>
            <SavedPage />
          </Route>
        </Switch>
      </main>

  
      
    </>
  );
}

export default App;
