import React from 'react';
import './gotohome.css';
import homeMain from '../assets/home_black.png';
import homeNav from '../assets/home_white.png';
import {useNavigate, useLocation} from "react-router-dom"

const GoToHome = () => {
  const navigate = useNavigate();

  const location = useLocation();

  let homeBatton = location.pathname === '/home' ? homeMain : homeNav;
  
  const handlegohome = (e) => {
      e.preventDefault();

      navigate("/")
  }

  const bgColor = location.pathname === '/home' ? 'black-bg' : 'white-bg';

  return (
    <button onClick={handlegohome} className={`go-home-btn ${bgColor}`}>
        <img src={`${homeBatton}`} alt="home-button"  className='home-icon'/>
    </button>
  )
}

export default GoToHome