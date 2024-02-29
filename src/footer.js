import React from 'react';
import './Header.css';

function Footer() {
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
                <nav id="footer">
                    <ul>
                        <li><a color='blanco' >SAMG</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default Footer;