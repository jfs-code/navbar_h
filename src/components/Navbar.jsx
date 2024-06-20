import React, { useState, useEffect  } from 'react';
import "../navbar.css";

export function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const navToggle = () => {
         active === 'nav__menu' 
             ? setActive('nav__menu nav__active') 
            : setActive('nav__menu');

        // TogglerIcon

        toggleIcon === "nav__toggler"
            ? setToggleIcon("nav__toggler toggle")
            : setToggleIcon("nav__toggler");
    }

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setActive('nav__menu');
            setToggleIcon('nav__toggler');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
    <nav className='nav'>
        <a href='#' className='nav__brand'>
            Menu
        </a>
        <ul className={active}>
            <li className='nav__item'>
                <a href="#" className="nav__link">
                    Home
                </a>
            </li>
            <li className='nav__item'>
                <a href="#" className="nav__link">
                    About
                </a>
            </li>
            <li className='nav__item'>
                <a href="#" className="nav__link">
                    Skills
                </a>
            </li>
            <li className='nav__item'>
                <a href="#" className="nav__link">
                    Portfolio
                </a>
            </li>
            <li className='nav__item'>
                <a href="#" className="nav__link">
                    Contact
                </a>
            </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>

  )
}
