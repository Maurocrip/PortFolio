import './Proyectos.css';
import ProyectoCard from './ProyectoCard';
import { useState, useRef } from 'react';
import ProyectoDetalle, { type ProyectoCompleto } from '../ProyectoDetalle/ProyectoDetalle';

const proyectos: ProyectoCompleto[] = [
  { 
    titulo: 'Proyecto 1', 
    descripcion: 'Una aplicación web interactiva que permite a los usuarios visualizar datos complejos de una manera sencilla y elegante. Se utilizó GSAP para animaciones fluidas y una experiencia de usuario dinámica.', 
    imagen: 'https://images.dog.ceo/breeds/puggle/IMG_074532.jpg',
    imagenes: ['https://images.dog.ceo/breeds/puggle/IMG_074532.jpg', 'https://images.dog.ceo/breeds/retriever-golden/n02099601_5893.jpg', "https://images.dog.ceo/breeds/dhole/n02115913_520.jpg"],
    descripcionDetallada: 'Esta es una descripción mucho más larga y detallada sobre el Proyecto 1. Aquí se explica el propósito, los desafíos y las soluciones implementadas. El objetivo principal era crear un dashboard personalizable para el análisis de datos de mercado en tiempo real.',
    tecnologias: ['React', 'TypeScript', 'GSAP']
  },
  { 
    titulo: 'Proyecto 2', 
    descripcion: 'Un robusto sistema de backend para una aplicación de comercio electrónico, manejando miles de transacciones por minuto. La arquitectura se basó en microservicios para garantizar escalabilidad y mantenibilidad.', 
    imagen: 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2756.jpg',
    imagenes: ['https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2756.jpg','https://images.dog.ceo/breeds/affenpinscher/n02110627_13060.jpg', "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_481.jpg"],
    descripcionDetallada: 'Detalles extensos sobre el Proyecto 2. Fue un proyecto enfocado en el backend con Node.js y Express, utilizando una base de datos NoSQL para una alta disponibilidad y flexibilidad en el esquema de datos.',
    tecnologias: ['Node.js', 'Express', 'MongoDB']
  },
  { 
    titulo: 'Proyecto 3', 
    descripcion: 'Aplicación móvil multiplataforma para la gestión de tareas en equipo. Permite la colaboración en tiempo real, asignación de responsabilidades y seguimiento del progreso de los proyectos.', 
    imagen: 'https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg',
    imagenes: ['https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg', 'https://images.dog.ceo/breeds/groenendael/n02105056_5100.jpg', "https://images.dog.ceo/breeds/entlebucher/n02108000_1172.jpg"],
    descripcionDetallada: 'El proyecto 3 fue una aplicación móvil desarrollada con React Native, conectada a una API de Firebase para autenticación y base de datos en tiempo real. La interfaz fue diseñada para ser intuitiva y fácil de usar.',
    tecnologias: ['React Native', 'Firebase']
  },
  { 
    titulo: 'Proyecto 4', 
    descripcion: 'Dashboard interactivo para la visualización de datos geoespaciales. Los usuarios pueden explorar mapas, aplicar filtros y ver estadísticas dinámicas sobre diferentes regiones.', 
    imagen: 'https://images.dog.ceo/breeds/leonberg/n02111129_4533.jpg',
    imagenes: ['https://images.dog.ceo/breeds/leonberg/n02111129_4533.jpg', 'https://images.dog.ceo/breeds/terrier-sealyham/n02095889_673.jpg', "https://images.dog.ceo/breeds/kombai/Kombai-indian-Dog.jpg"],
    descripcionDetallada: 'Este proyecto es una visualización de datos creada con D3.js y React, mostrando estadísticas en tiempo real a través de una conexión WebSocket. El reto fue optimizar el rendimiento para manejar grandes volúmenes de datos.',
    tecnologias: ['React', 'D3.js', 'WebSocket']
  },
  { 
    titulo: 'Proyecto 5', 
    descripcion: 'Plataforma de e-commerce completa con carrito de compras, sistema de pago integrado y panel de administración para gestionar productos, pedidos y clientes.', 
    imagen: 'https://images.dog.ceo/breeds/spaniel-irish/n02102973_377.jpg',
    imagenes: ['https://images.dog.ceo/breeds/spaniel-irish/n02102973_377.jpg'],
    descripcionDetallada: 'Un e-commerce completo construido con el stack MERN, incluyendo pasarelas de pago seguras con Stripe y un sistema de autenticación de usuarios basado en JWT para proteger las rutas y los datos sensibles.',
    tecnologias: ['MongoDB', 'Express', 'React', 'Node.js']
  },
];

interface TransitionData {
  proyecto: ProyectoCompleto;
  fromRect: DOMRect;
}

const Proyectos = () => {
  const [transitionData, setTransitionData] = useState<TransitionData | null>(null);
  const [hidingIndex, setHidingIndex] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardClick = (proyecto: ProyectoCompleto, index: number) => {
    const cardEl = projectRefs.current[index];
    if (cardEl) {
      const fromRect = cardEl.getBoundingClientRect();
      setHidingIndex(index);
      setTransitionData({ proyecto, fromRect });
    }
  };

  const handleCloseDetalle = () => {
    setTransitionData(null);
    setHidingIndex(null);
  };

  return (
    <section className="proyectos-section">
      <h2>Mis Proyectos</h2>
      <div className="proyectos-mosaico">
        {proyectos.map((proyecto, id) => {
          let className = '';
          if (id === 0) className = 'card-grande'; // Primera tarjeta grande
          if (id === 3) className = 'card-ancha'; // Cuarta tarjeta ancha
          if (id === hidingIndex) className += ' is-hiding';

          return (
            <ProyectoCard
              key={id}
              ref={(el) => (projectRefs.current[id] = el)}
              {...proyecto}
              className={className}
              onClick={() => handleCardClick(proyecto, id)}
            />
          );
        })}
      </div>
      {transitionData && (
        <ProyectoDetalle
          proyecto={transitionData.proyecto}
          fromRect={transitionData.fromRect}
          onClose={handleCloseDetalle}
        />
      )}
    </section>
  );
};

export default Proyectos;
