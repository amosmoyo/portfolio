import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = ({phrase, link, toAddress}) => {
  return (
    <div className='footer'>
        {phrase}
        <Link to={`/${toAddress}`} className="btn btn-link  text-dark btn-icon">
            {link}
        </Link>
    </div>
  )
}

export default Footer