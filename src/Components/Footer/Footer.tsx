import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Email: mauroracioppi@gmail.com</p>
                <p>Teléfono: +54 11 6761-4244</p>
                <p>Ubicación: Buenos Aires, Argentina</p>
            </div>
        </footer>
    );
};

export default Footer;