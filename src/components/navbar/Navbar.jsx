import React, { useContext, useState } from 'react'
import { FaBell, FaHamburger, FaSearch } from 'react-icons/fa'
import { SidebarContext } from '../../context/uiContext'
export const Navbar = () => {

    const {setOpenSidebar, openSidebar} = useContext(SidebarContext)
    
    return (
        <nav className="nav">
            <div className="left__side">
                <div 
                    className="toggle__btn"
                    onClick={ () => setOpenSidebar(!openSidebar) }
                >
                    <FaHamburger 
                        className="toggle__icon"
                    />
                </div>
                <h2> Dashboard Lab </h2>
            </div>
            <div className="rigth__side">
                <form className="form right__side-item">
                    <button htmlFor="search">
                        <FaSearch 
                            className="search__icon"
                        />
                    </button>
                    <input type="text" name="" id=""/>
                </form>
                <div className="notification__icon right__side-item">
                    <FaBell 
                        className="icon" 
                    />
                </div>
                    
                <div className="img right__side-item">
                    <img src="./assets/img/profile.png" alt="Profile " className="profile"/>
                </div>
            </div>
        </nav>
    )
}
