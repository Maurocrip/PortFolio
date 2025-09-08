import React, { useRef, useState, useEffect } from 'react';
import './Perfil.css';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import foto from '../assets/yo.jpg';
import video from '../assets/fondo.mp4';

const Perfil: React.FC = () => {
  const [leftWidth, setLeftWidth] = useState<number>(5); // porcentaje inicial
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(Draggable, SplitText);

  useGSAP(() => {
    // Animación de texto con SplitText
    const split = SplitText.create('#split', { type: 'chars' });
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    gsap.set('#split', { opacity: 1 });
    tl.from(split.chars, {
      duration: 0.05,
      opacity: 0,
      ease: 'none',
      stagger: 0.07,
    });
  });

  useEffect(() => {
    const container = containerRef.current;
    const divider = dividerRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;

    if (!container || !divider || !leftPanel || !rightPanel) return;
    const containerWidth = container.getBoundingClientRect().width;

    const minX = containerWidth * 0.05;
    const maxX = containerWidth * 0.45;

    const updateDraggable = () => {
      const containerWidth = container.getBoundingClientRect().width; 

      // Posición inicial del divider
      const initialX = (leftWidth / 100) * containerWidth;
      gsap.set(divider, { x: initialX });
      gsap.set(leftPanel, { width: `${leftWidth}%` });

      // Crear Draggable
      Draggable.create(divider, 
      {
        type: 'x',
        bounds: { minX, maxX },
        onDrag: function () {
          const x = this.x;

          // Actualizar ancho del panel izquierdo
          const percent = (x / containerWidth) * 100;
          gsap.set(leftPanel, { width: `${percent}%` });

          // ---------------------
          // Mapear opacidades
          const relativeX = (x - minX) / (maxX - minX); // 0 → 1

          // Right panel opacidad (desvanece de 0 → 50%)
          let rightOpacity = 1;
          if (relativeX <= 0.6) {
            rightOpacity = gsap.utils.mapRange(0, 0.6, 1, 0, relativeX);
          } else {
            rightOpacity = 0;
          }

          // Left panel opacidad (aparece de 50% → 100%)
          let leftOpacity = 0;
          if (relativeX >= 0.4) {
            leftOpacity = gsap.utils.mapRange(0.4, 1, 0, 1, relativeX);
          } else {
            leftOpacity = 0;
          }

          // Aplicar opacidades
          gsap.set(leftPanel, { opacity: leftOpacity });
          gsap.set(rightPanel, { opacity: rightOpacity });
        },
        onRelease: function () {
          const finalPercent = (this.x / containerWidth) * 100;
          setLeftWidth(finalPercent);
        },
      });
    };

    updateDraggable();

    // Recalcular si la ventana cambia de tamaño
    window.addEventListener('resize', updateDraggable);
    return () => {
      window.removeEventListener('resize', updateDraggable);
      Draggable.get(divider)?.kill();
    };
  }, [leftWidth]);

  return (
    <section className="perfil-section">
      <div className="container" ref={containerRef}>
        <div className="lado-izquierdo" ref={leftPanelRef} style={{ width: `${leftWidth}%` }} >
          <div className="perfil-sobreMi">
            <h1>Sobre Mi</h1>
            <label >Soy Mauro Hernán Racioppi, técnico en programación con un profundo interés por el desarrollo y la tecnología. Mi paso por la Universidad Tecnológica Nacional me brindó una sólida formación en software, despertando mi curiosidad 
              por explorar distintas áreas del desarrollo. Aunque no tengo experiencia laboral formal, he trabajado en proyectos académicos y personales que me han permitido fortalecer tanto mis habilidades técnicas como mi capacidad para trabajar en equipo. 
              Actualmente, mi objetivo es avanzar hacia el desarrollo full-stack y seguir creciendo profesionalmente en el sector tecnológico, siempre comprometido con el aprendizaje continuo.</label>
          </div>
        </div>

        <div className="divider" id="divider" ref={dividerRef}>
          <img className='perfil-foto' src={foto} alt="Foto de perfil" />
        </div>

        <div className="perfil-info" ref={rightPanelRef} style={{backgroundClip: `url(${video})`}}>
          <video src={video} autoPlay loop muted className="video-background">
            <source src={video} type="video/mp4" />
          </video>
          <div className='mask'>
            <div className="split" id='split'>
              <h1 className="perfil-nombre">Mauro <br></br> Hernan Racioppi</h1>
              <h3 className="perfil-titulo">Desarrollador Full-Stack</h3>
              <label className="perfil-descripcion">Joven desarrollador, apasionado por la tecnología.</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;

