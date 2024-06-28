
import React, { useState } from 'react';
import './Navbar.css';
import LandingPage from '../LandingPage/index'
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () =>{

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="lg:hidden">
        <div className='navbar'>
        <h2>Ryan</h2>
        <input type='text' placeholder='Enter city name' src='fa fa-search'/>
        
        <i className='icon'></i>
        <Hamburger toggled={isOpen} size={20} toggle={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">Weather News</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
      <LandingPage/>
      </div>
      
    );
}
export default Navbar;

// 📂./src/components/NavMobile.js


