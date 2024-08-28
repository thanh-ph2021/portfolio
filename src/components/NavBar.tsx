import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../css/NavbarStyles.css';

export const NavBar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const toggleMenu = () => {
        setIsOpenMenu(prev => !prev)
    }

    return (
        <div className='header'>
            <h2>Thanh.</h2>
            <ul className={isOpenMenu ? 'nav-menu active' : 'nav-menu'}>
                <div className='exit' onClick={toggleMenu} aria-label="Close menu">
                    <FaTimes size={25} />
                </div>

                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                    <li key={item} onClick={() => setIsOpenMenu(false)}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='hamburger' onClick={toggleMenu} aria-label="Open menu">
                <FaBars size={25} />
            </div>
        </div>
    )
}