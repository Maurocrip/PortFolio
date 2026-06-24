import './Contacto.css';
import Swal from 'sweetalert2';
import React, { useContext } from 'react';
import { lenguagueContext } from '../../Services/Lenguague';
import pdf from '../../Public/Curriculum_Mauro_Racioppi.pdf';

const Contacto: React.FC = () => {

    const { spanish, extrasTitulos, information } = useContext(lenguagueContext);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mauroracioppi@gmail.com');
        Swal.fire({
            icon: 'success',
            title: spanish ? 'Correo copiado' : 'Email copied',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
            color: '#fff',
        });
    };
    const HandlePdf = () => 
    {
        window.open(pdf, "_blank");
    }

    return (
        <section className="contacto">
            <div className="contacto-main">
                <h2 className="contacto-titulo">{spanish ? 'Contacto' : 'Contact'}</h2>
                <div className="contacto-info">
                    <div className="contacto-item">
                        <p>{spanish ? extrasTitulos.correo : extrasTitulos.mail}:</p>
                        <p className="email" onClick={handleCopyEmail}>
                            mauroracioppi@gmail.com
                        </p>
                    </div>
                    <div className="contacto-item">
                        <p>{spanish ? extrasTitulos.telefono : extrasTitulos.phone}:</p>
                        <p>+54 11 67614244</p>
                    </div>
                    <div className="contacto-item">
                        <p>{spanish ? extrasTitulos.ubicacion : extrasTitulos.location}:</p>
                        <p>Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className="contacto-social">
                    <button className="social-btn" onClick={() => window.open('https://github.com/Maurocrip', '_blank')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" >
                            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg> 
                        GitHub
                    </button>
                    <button className="social-btn" onClick={() => window.open('https://www.linkedin.com/in/mauro-racioppi-940169314', '_blank')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        LinkedIn
                    </button>
                    <button className="social-btn" onClick={HandlePdf}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                            <g fill="currentColor">
                                <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" />
                                <path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd"  />
                            </g>
                        </svg> 
                        {spanish ? extrasTitulos.curriculum : extrasTitulos.resume}
                    </button>
                </div>
            </div>
            <div className="contacto-extra">
                <h2>{spanish ? extrasTitulos.masInformacion : extrasTitulos.moreInformation}</h2>
                <p> {spanish ? information.sobreMi : information.aboutMe}</p>
            </div>
        </section>
    );
};

export default Contacto;
