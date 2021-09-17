import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import { useState, useEffect } from 'react'
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



function App() {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([])

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
            <DetailPage user={user} usersSavedItems={usersSavedItems} />
          </Route>
          <Route path="/ArchivedPage" exact>
            <ArchivedPage />
          </Route>
          <Route path="/TradingPage" exact>
            <TradingPage />
          </Route>
          <Route path="/InboxPage" exact>
            <InboxPage user={user} chats={chats}/>
            {/* <InboxPage wsClient={webSocketRef.current} messages={messages} setMessages={setMessages} user={user}/> */}
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
