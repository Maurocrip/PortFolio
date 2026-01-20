import './Footer.css';
import React, { useContext } from 'react';
import { lenguagueContext } from '../../Services/Lenguague';


const Footer: React.FC = () => {
        const { spanish, extrasTitulos } = useContext(lenguagueContext);
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>{spanish ? extrasTitulos.correo : extrasTitulos.mail}: mauroracioppi@gmail.com</p>
                <p>{spanish ? extrasTitulos.telefono : extrasTitulos.phone}: +54 11 6761-4244</p>
                <p>{spanish ? extrasTitulos.ubicacion : extrasTitulos.location}: Buenos Aires, Argentina</p>
            </div>
        </footer>
    );
};

export default Footer;