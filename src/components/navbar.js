import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; 
import Logo from "../images/logo.png"
import Top from "../images/takeaction-pictures/elderpeople.jpg"


const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light-mode');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [shoppingListVisible, setShoppingListVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark-mode');
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleShoppingList = () => {
    setShoppingListVisible((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };



  return (
 
<div>

<header>
  <img
src={Logo}
id="logotac" alt="talogo"
draggable="false"
/>
  <div>
<img
src={Top}
alt="header-img"
    id="elderpeople"
    className="elder-people"
draggable="false"
/>
  </div>
</header>

     
    <div className="navbar-container">
      <nav>
        <div className="nav-bar">
          <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
          <span className="logo navLogo">
          </span>

          <div className={`menu ${sidebarOpen ? 'active' : ''}`}>
            <div className="logo-toggle">
              <span className="logo">
                <a href="/">ElectronicHub</a>
              </span>
              <i className='bx bx-x siderbarClose' onClick={closeSidebar}></i>
            </div>

            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><a className="aboutbtn" href="/about">About us</a></li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown-menu">
                  <li><Link to="/program">Programs</Link></li>
                  <li><Link to="/action">Take Action</Link></li>
                  <li> <Link to="/contact">Contact</Link></li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </li>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Sign up</a></li>
            </ul>
          </div>

          <div className="darkLight-searchBox">
            <div className="dark-light" onClick={toggleMode}>
              <i className={`bx ${mode === 'dark-mode' ? 'bx-moon' : 'bx-sun'}`}></i>
            </div>

      </div>
        {/* Floating window for shopping list */}
      

 {/* ////////////////////////////////////////////////////////////////*/}
 
{/* Login icon with click event */}
{/* <div className={`login ${loginVisible ? 'active' : ''}`} onClick={toggleLogin}>
  <i className={`bx ${loginVisible ? 'bx-x' : 'bx-log-in'}`}></i>
</div> */}
{/* {loginVisible && (
  <div className="floating-window">
    <div className="login-form">
      {/* Add your login form content here */}
      {/* <p>Login form goes here.</p> */}
      {/* You can add more form elements as needed */}
      {/* <button className='login-btn'>Login</button>
    </div>
  </div>
)} */} 


{/* Signup icon with click event */}
{/* <div className={`signup ${signupVisible ? 'active' : ''}`} onClick={toggleSignup}>
  <i className={`bx ${signupVisible ? 'bx-x' : 'bx-user-plus'}`}></i>
</div>
{signupVisible && (
  <div className="floating-window">
    <div className="signup-form"> */}
      {/* Add your signup form content here */}
      {/* <p>Signup form goes here.</p> */}
      {/* You can add more form elements as needed */}
      {/* <button className='signup-btn'>Sign Up</button>
    </div>
  </div>
)} */}
      {/* ///////////////////////////////////////////////////////////////////// */}
        </div>
        
      </nav>
    </div>
    </div>

  );
};

export default Navbar;


