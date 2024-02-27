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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Galería</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
