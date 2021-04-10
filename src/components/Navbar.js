import React, { useState } from 'react'
import './Navbar.css'
import { RiVirusFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const menu = [{title: 'Home' , to: "/"}, {title: 'Mutations' , to: "/mutations"}]
    return (
        <div className="navbar container">
                <div className="navbar__brand">
                    <RiVirusFill className="virus"/>
                    <span>Virus Tracker</span>
                </div>
                

                <div className="navbar__menu">
                    {
                        menu.map((item) => {
                            return (
                                <Link to={item.to}>
                                    <h3 className="menu__item">{item.title}</h3>
                                </Link>
                            );
                        })
                    }
                </div>
            
        </div>
    )
}

export default Navbar
