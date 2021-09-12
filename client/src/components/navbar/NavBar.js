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
          <ul className="nav-links">

          <li className="nav-li">
                <NavLink activeClassName="nav-link-active" className="nav-link one" to="/">
                <div className='icon'><FaHatCowboy className='fa'/></div>
                Home
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
