import React from 'react'

import "./Navbar.css"
import Fire from "../../assets/fire.png"
import Star from "../../assets/star.png"
import Love from "../../assets/love.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>moviemaniac</h1>

        <div className="navbar_links">
            <a href="#popular ">Popular <img src={Fire} alt="" className='navbar_emoji'/> </a>
            <a href="#top_rated ">Top rated <img src={Star} alt="" className='navbar_emoji'/></a>
            <a href="#upcoming ">Upcoming <img src={Love} alt="" className='navbar_emoji'/></a>
        </div>
    </nav>
  )
}

export default Navbar;