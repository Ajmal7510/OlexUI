import React, { useEffect, useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useAuth } from '../../Security/AouthContext';
import { useNavigate } from 'react-router-dom';
function Header() {

  const navigate=useNavigate()
  const {user,logout} = useAuth();
 
  const handleLogout = () => {
    logout(); 
    
  };
  useEffect(() => {
    
   console.log(user);
  }, []);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          navigate('/')
        }}>
          <OlxLogo>
          </OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user && user.username !== null ? (
            <div className="dropdown">
              <button className="dropbtn">{user.userName}</button>
              <div className="dropdown-content">
                <a href="#">Profile</a>
                <a href="#" onClick={handleLogout}>Logout</a>
              </div>
            </div>
          ) : (
            <>
            <span onClick={() => navigate("/login")}>Login</span>
            <hr />
            </>
          )}
        
        </div>

        <div  onClick={()=>navigate("/create")}className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
