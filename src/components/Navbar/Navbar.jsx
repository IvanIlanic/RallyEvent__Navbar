import React from 'react'
import './Navbar.css'
import { HiViewBoards,HiLightningBolt } from "react-icons/hi";
import images from '../../constants/images';
import { useState } from 'react';

const Menu = () => (
    <>
    <p><a href="#RallyCro">RallyCro</a></p>
    <p><a href="#Start">Start</a></p>
    <p><a href="#Drivers">Drivers</a></p>
    <p><a href="#Maps">Maps</a></p>
    <p><a href="#Tehnicalnfo">Tehnical Info</a></p>
    <p><a href="#Contact">Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <div className='all'>
        
        <video autoPlay loop muted plays-inline className='back-video'>
          <source src={images.background} type="video/mp4" />
          
        </video>

        <div className="rallyevent__navbar ">
          <div className="rallyevent__navbar-links ">
            <div className="rallyevent__navbar-links_logo">
              <img src={images.flag} alt="logo" />
            </div>
            <div className="rallyevent__navbar-links_container ">
              <Menu/>
            </div>
          </div>
          <div className="rallyevent__navbar-menu">
           {toggleMenu
             ? <HiViewBoards color='#fff' size={27} onClick={() => setToggleMenu(false)} />
             : <HiLightningBolt  color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
           {toggleMenu && (
           <div className="rallyevent__navbar-menu_container">
             <div className="rallyevent__navbar-menu_container-links">
               <Menu/>
             </div>
           </div>
           )}
         </div>
       </div>
      </div>
     );
   };
export default Navbar