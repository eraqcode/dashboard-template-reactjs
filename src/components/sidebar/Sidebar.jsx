import React, { useContext } from 'react'
import { FaArchive, FaBriefcase, FaBuilding, FaCalendarCheck, FaFileSignature, FaHandshake, FaHome, FaMoneyBill, FaPowerOff, FaQuestion, FaSignOutAlt, FaTimes, FaUserSecret, FaWrench } from 'react-icons/fa'
import { SidebarContext } from '../../context/uiContext'

export const Sidebar = () => {

    const {openSidebar, setOpenSidebar} = useContext(SidebarContext)

    return (
        <aside className={ openSidebar ? "hidden" : "" }>
            <div className="aside__container">
                <div className="aside__header">
                    <div className="logo">
                        <img src="./assets/img/logo.svg" alt="Logotipo"/>
                        <h2>EraqCode</h2>
                    </div>
                    <div 
                        className="btn__close"
                        onClick={ () => setOpenSidebar(!openSidebar) }
                    >
                        <FaTimes 
                            className="aside__icon"
                        />
                    </div>
                    
                </div>
                <div className="aside__content">
                    <div className="home">
                        <FaHome 
                            className="icon__home"
                        />
                        <h3>Dashboard</h3>
                    </div>
                    <nav className="aside__nav">
                        <h3 className="list__title">Group Menu</h3>
                        <ul className="menu">
                            <li className="list__item">
                                <FaUserSecret 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 1</a>
                            </li>
                            <li className="list__item">
                                <FaBuilding 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 2</a>
                            </li>
                            <li className="list__item">
                                <FaWrench 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 3</a>
                            </li>
                            <li className="list__item">
                                <FaArchive 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 4</a>
                            </li>
                            <li className="list__item">
                                <FaHandshake 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 5</a>
                            </li>
                        </ul>

                        <h3 className="list__title">Group Menu</h3>
                        <ul className="menu">
                            <li className="list__item">
                                <FaQuestion 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 1</a>
                            </li>
                            <li className="list__item">
                                <FaSignOutAlt 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 2</a>
                            </li>
                            <li className="list__item">
                                <FaCalendarCheck 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 3</a>
                            </li>
                            <li className="list__item">
                                <FaFileSignature 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 4</a>
                            </li>
                        </ul>
                        
                        <h3 className="list__title">Group Menu</h3>
                        <ul className="menu">
                            <li className="list__item">
                                <FaMoneyBill 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 1</a>
                            </li>
                            <li className="list__item">
                                <FaBriefcase 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 2</a>
                            </li>
                            <li className="list__item">
                                <FaPowerOff 
                                    className="list__item-icon"
                                />
                                <a href="#">Link 3</a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}
