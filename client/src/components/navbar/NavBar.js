import { NavLink } from "react-router-dom";
import "./navbar.css"
import { FaRegHeart, FaTag, FaCamera, FaInbox, FaHatCowboy, FaRegListAlt } from "react-icons/fa";
import Avatar from 'react-avatar';
import { LogoutButton } from "../LogoutButton";



const NavBar = ({ name, setUser }) => {
    return (
        <>

        
        <nav className="navBar">
        <div className='icon-bar'>
        <img className='nav-logo' src='https://lh3.googleusercontent.com/pw/AM-JKLVatT3dGVr-R4X8-1SOvurVwg-M1C2BTQVp-ol5PvYCZZdFDbScjqaeGl2zL5RYcb1MO9OA2e2W12G1qHwiXp67loyktYl2cleceOD5UjjbTL6qx22XkOdjMO1USN-E9JZr8gg9r71j3cyo2_198Juw=s834-no?authuser=0' />
          <ul className="nav-links">

          <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/"  exact={true}>
                <div className='icon'><FaHatCowboy className='fa cowboy'/></div>
                <div className='name'>Home</div>
                </NavLink>
              </li>

            <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/TradingPage">
                <div className='icon'><FaTag className='fa'/></div>
                <div className='name'>Trading</div>
                </NavLink>
              </li>

              <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/PostPage">
                  <div className='icon'><FaCamera className='fa'/></div>
                  <div className='name'>Post</div>
                </NavLink>
              </li>

              <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/InboxPage">
                <div className='icon'><FaInbox className='fa'/></div>
                <div className='name'>Inbox</div>
                </NavLink>
              </li>

              <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/SavedPage">
                <div className='icon'><FaRegHeart className='fa'/></div>
                <div className='name'>Saved</div>
                </NavLink>
              </li>

              <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/WishlistPage">
                <div className='icon'><FaRegListAlt className='fa'/></div>
                <div className='name'>Wish List</div>
                </NavLink>
              </li>

              
              <div className="dropdown">
              <Avatar name={name} round={true} size={40}/>
                <div className="dropdown-content">
                  
                  <a><LogoutButton setUser={setUser}/></a>
                </div>
              </div>
      
          </ul>
      </div>
      </nav>
      </>
    )
}

export default NavBar
