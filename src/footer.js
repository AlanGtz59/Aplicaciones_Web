import React from 'react';
import './Header.css';

function Footer() {
    // Función para alternar la visibilidad del menú
    return (
        <div>
            <footer>
                <nav id="footer">
                        {/* Enlace de texto en el menú */}
                        <li style={{ color: 'white' }}>SAMG TID41M</li>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
