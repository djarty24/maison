import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul><li><Link to={"/"}><img src="" alt="maison-logo" /></Link></li></ul>
        <ul>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/donate"}>Donate</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar