import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import "./navbar.css";

export function Navbar({ brand, links }) {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const [activeLink, setActiveLink] = useState(null);

    const navToggle = () => {
        setActive(prev => prev === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(prev => prev === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setActive('nav__menu');
            setToggleIcon('nav__toggler');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (index) => {
        setActiveLink(index); 
        if (window.innerWidth <= 768) {
            setActive('nav__menu'); 
            setToggleIcon('nav__toggler'); 
        }
    };

    return (
        <nav className='nav'>
            <a href='#' className='nav__brand'>
                {brand}
            </a>
            <ul className={active}>
                {links.map((link, index) => (
                    <li key={index} className='nav__item'>
                        <a
                            href={link.href}
                            className={`nav__link ${activeLink === index ? 'active' : ''}`}
                            onClick={() => handleLinkClick(index)}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}            
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    brand: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    })).isRequired
};
