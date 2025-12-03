import React, { useContext } from 'react';
import type { IProyecto } from '../../Interfaces/IProyecto';
import { lenguagueContext } from '../../Services/Lenguague';

interface ProyectoCardProps {
  proyecto: IProyecto;
}

const ProyectoCard : React.FC<ProyectoCardProps> = ({ proyecto }) => {
    const { spanish} = useContext(lenguagueContext);
  return (
    <div className='card-proyecto' style={{ height: proyecto.height }}>
      <div className='CentrarImagen'>
        <img src={proyecto.imagen} alt={spanish ? proyecto.Español.titulo : proyecto.Ingles.titulo}/>
      </div>
      <div className='centarInfo'>
      <h2>{spanish ? proyecto.Español.titulo : proyecto.Ingles.titulo}</h2>
      <p style={{fontSize: Math.max(12, proyecto.height * 0.03)}}>{spanish ? proyecto.Español.descripcion : proyecto.Ingles.descripcion}</p>
      <div className='CentrarBotones'>
        <a className='Codigo' href={proyecto.codigo} target="_blank" rel="noopener noreferrer">{spanish ? "Código" : "Code"}</a>
        <a className='Pagina' href={proyecto.pagina} target="_blank" rel="noopener noreferrer">{spanish ? "Página" : "Page"}</a>
      </div>
    </div>
  </div>
  );
};

export default ProyectoCard;
