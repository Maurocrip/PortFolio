import React from 'react';

interface ProyectoCardProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  className?: string;
  onClick: () => void;
}

const ProyectoCard = React.forwardRef<HTMLDivElement, ProyectoCardProps>(
  ({ titulo, descripcion, imagen, className, onClick }, ref) => (
    <div ref={ref} className={`proyecto-card ${className || ''}`} onClick={onClick}>
      <img src={imagen} alt={titulo} className="proyecto-imagen" />
      <div className="proyecto-info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
);

export default ProyectoCard;
