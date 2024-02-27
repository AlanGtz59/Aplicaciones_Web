// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        const closeButton = document.getElementById('close-button');
        menu.classList.toggle('open-menu');
        closeButton.classList.toggle('show-close');
    };

    return (
        <div>
            <header>
                <div className="bars">
                    <button onClick={toggleMenu} className="menu-button" id="close-button"></button>
                </div>
                <nav id="menu" className="dropdown-menu">
                    <ul>
                        <li><h2 color='blanco' >Adorable Cats</h2></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
