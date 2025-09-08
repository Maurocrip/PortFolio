import React, { useState, useRef } from 'react';
import './ProyectoDetalle.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export interface ProyectoCompleto {
  titulo: string;
  descripcion: string;
  imagen: string;
  imagenes: string[];
  descripcionDetallada: string;
  tecnologias: string[];
}

interface ProyectoDetalleProps {
  proyecto: ProyectoCompleto;
  onClose: () => void;
  fromRect: DOMRect;
}

const ProyectoDetalle: React.FC<ProyectoDetalleProps> = ({ proyecto, onClose, fromRect }) => {
  const [imagenActual, setImagenActual] = useState(0);
  const containerRef = useRef(null);
  const animatingImageRef = useRef(null);
  const backdropRef = useRef(null);
  const carouselImageRef = useRef(null); // Ref para la imagen de destino en el modal

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hacemos el modal invisible pero presente en el layout para calcular su tamaño
    gsap.set(backdropRef.current, { autoAlpha: 1, visibility: 'hidden' });
    const targetRect = carouselImageRef.current.getBoundingClientRect();
    console.log(targetRect);
    gsap.set(backdropRef.current, { autoAlpha: 0, visibility: 'visible' });

    // 1. Animar la imagen desde su posición original a la posición final de la imagen del modal
    tl.fromTo(animatingImageRef.current, {
      top: fromRect.top,
      left: fromRect.left,
      width: fromRect.width,
      height: fromRect.height,
      objectFit: 'contain'
    }, {
      top: targetRect.top,
      left: targetRect.left,
      width: targetRect.width,
      height: targetRect.height,
      ease: 'expo.inOut',
      duration: 0.6,
    });

    // 2. Aparecer el modal y ocultar la imagen animada
    tl.to(backdropRef.current, {
      autoAlpha: 1, // Anima opacidad y visibilidad
      duration: 0.4,
      onStart: () => {
        gsap.to(animatingImageRef.current, { autoAlpha: 0, duration: 0.2 });
      }
    });
  }, { scope: containerRef });

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    const targetRect = carouselImageRef.current.getBoundingClientRect();
    
    gsap.set(animatingImageRef.current, {
      top: targetRect.top,
      left: targetRect.left,
      width: targetRect.width,
      height: targetRect.height,
    });

    tl.to(animatingImageRef.current, { autoAlpha: 1, duration: 0.1 });
    tl.to(backdropRef.current, { autoAlpha: 0, duration: 0.4 }, "<");
    tl.to(animatingImageRef.current, {
      top: fromRect.top,
      left: fromRect.left,
      width: fromRect.width,
      height: fromRect.height,
      ease: 'expo.inOut',
      duration: 0.6,
    }, "<");
  };

  const siguienteImagen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagenActual((prev) => (prev + 1) % proyecto.imagenes.length);
  };

  const anteriorImagen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagenActual((prev) => (prev - 1 + proyecto.imagenes.length) % proyecto.imagenes.length);
  };

  return (
    <div ref={containerRef}>
      <img ref={animatingImageRef} src={proyecto.imagen} className="detalle-animating-image" alt="" />
      <div ref={backdropRef} className="detalle-backdrop" onClick={handleClose}>
        <div className="detalle-card" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleClose} className="detalle-close-btn">&times;</button>
          
          <h2>{proyecto.titulo}</h2>

          <div className="detalle-carousel">
            {proyecto.imagenes.length > 1 && <button onClick={anteriorImagen} className="carousel-btn prev">&lt;</button>}
            <img ref={carouselImageRef} src={proyecto.imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1} de ${proyecto.titulo}`} />
            {proyecto.imagenes.length > 1 && <button onClick={siguienteImagen} className="carousel-btn next">&gt;</button>}
          </div>

          <div className="detalle-contenido">
            <h3>Descripción</h3>
            <p>{proyecto.descripcionDetallada}</p>

            <h3>Tecnologías Utilizadas</h3>
            <ul className="detalle-tecnologias">
              {proyecto.tecnologias.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoDetalle;
