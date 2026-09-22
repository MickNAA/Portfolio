import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header flex items-center justify-between px-8 py-4'>
        <NavLink to="/" className="w-fit h-fit px-3 py-2 rounded-lg bg-white 
        items-center justify-center flex font-bold shadow-md">
          <p className="blue-gradient-text">Home</p>
        </NavLink>
        <nav className="flex text-lg gap-5 font-medium">
            <NavLink to="/about" 
              className={({isActive}) => isActive? 'text-blue-500': 'text-black' }> 
              About 
            </NavLink>
            <NavLink to="/project" 
              className={({isActive}) => isActive? 'text-blue-500': 'text-black' }> 
              Project 
            </NavLink>
            <NavLink to="/contact" 
              className={({isActive}) => isActive? 'text-blue-500': 'text-black' }> 
              Contact 
            </NavLink>
            
        </nav>
    </header>
  )
}

export default Navbar