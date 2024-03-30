import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='flex items-center justify-between mb-12 p-4 md:py-6 md:px-10 text-xl' style={{fontFamily: "'Raleway', sans-serif"}}>
        <Link to={"/"} className='flex flex-row items-center gap-5 text-lg'>
                <img className='aspect-square w-10' src="/favicon.png" alt="maison-logo" />
                <h2 className='text-2xl'>Maison</h2>
        </Link>
        <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                let x = document.getElementById("navlinks");
                if (toggled){
                    x.style.display = "block";
                } else {
                    x.style.display = "hidden";
                }
            }} />
        </div>
        <ul id='navlinks' className='hidden md:flex md:flex-row md:gap-12 md:px-4'>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/donate"}>Donate</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar