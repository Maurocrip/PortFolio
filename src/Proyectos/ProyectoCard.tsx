import React from 'react';
import type { ProyectoCompleto } from './Proyectos';

interface ProyectoCardProps {
  proyecto: ProyectoCompleto;
}

const ProyectoCard = React.forwardRef<HTMLDivElement, ProyectoCardProps>(({  proyecto }) => (
  <div className='card-proyecto' style={{ height: proyecto.height }}>
    <div className='CentrarImagen'>
      <img src={proyecto.imagen} alt={proyecto.titulo}/>
    </div>
    <div className='centarInfo'>
      <h2>{proyecto.titulo}</h2>
      <p style={{fontSize: Math.max(12, proyecto.height * 0.03)}}>{proyecto.descripcion}</p>
      <div className='CentrarBotones'>
        <a className='Codigo' href={proyecto.codigo} target="_blank" rel="noopener noreferrer">Código</a>
        <a className='Pagina' href={proyecto.pagina} target="_blank" rel="noopener noreferrer">Página</a>
      </div>
    </div>
  </div>
));

export default ProyectoCard;
