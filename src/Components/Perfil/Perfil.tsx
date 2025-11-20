import './Perfil.css';
import React, { useRef, useState, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { globalContext } from '../../Services/Global';
import { lenguagueContext } from '../../Services/Lenguague';
import foto from '../assets/yo.jpg';
import video from '../assets/fondo.mp4';
import Contacto from '../Contacto/Contacto';
import { s } from 'framer-motion/client';

const Perfil: React.FC = () => {
  const { contacto, setContacto } = useContext(globalContext);
  const { spanish, information, extrasTitulos } = useContext(lenguagueContext);
  const [leftWidth, setLeftWidth] = useState(5);
  const [buttonText, setButtonText] = useState(spanish ? extrasTitulos.contacto : extrasTitulos.contact);
  const [isMaximized, setIsMaximized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable | null>(null);

  gsap.registerPlugin(Draggable, SplitText);

  useEffect(()=>{
    if(contacto && buttonText === (spanish ? extrasTitulos.contacto : extrasTitulos.contact)){
      handleButtonClick();
    }
    if(!contacto && buttonText === (spanish ? extrasTitulos.titulo : extrasTitulos.title)){
      handleButtonClick();
    }
  },[contacto])
  
  useEffect(()=>{
    if(spanish)
    {
      setButtonText(contacto ? extrasTitulos.titulo : extrasTitulos.contacto);
    }
    else
    {
      setButtonText(contacto ? extrasTitulos.title : extrasTitulos.contact);
    }
  },[spanish])

  useGSAP(() => {
    const split = SplitText.create('#split', { type: 'chars' });
    gsap.set('#split', { opacity: 1 });
    gsap.timeline({ repeat: -1, yoyo: true }).from(split.chars, {
      duration: 0.05,
      opacity: 0,
      ease: 'none',
      stagger: 0.07,
    });
  }, [spanish]);

  // Utilidad para calcular opacidades y ancho
  const updatePanels = (x: number, containerWidth: number, minX: number, maxX: number) => 
  {
    const percent = (x / containerWidth) * 100;
    gsap.set(leftPanelRef.current, { width: `${percent}%` });

    const relativeX = (x - minX) / (maxX - minX);
    const rightOpacity = relativeX <= 0.6 ? gsap.utils.mapRange(0, 0.6, 1, 0, relativeX) : 0;
    const leftOpacity = relativeX >= 0.4 ? gsap.utils.mapRange(0.4, 1, 0, 1, relativeX) : 0;

    gsap.set(leftPanelRef.current, { opacity: leftOpacity });
    gsap.set(rightPanelRef.current, { opacity: rightOpacity });

    if (relativeX > 0.5) 
    {
      setButtonText(spanish ? extrasTitulos.titulo : extrasTitulos.title);
      setIsMaximized(true);
      setContacto(true);
    } 
    else 
    {
      setButtonText(spanish ? extrasTitulos.contacto : extrasTitulos.contact);
      setIsMaximized(false);
      setContacto(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const divider = dividerRef.current;
    if (!container || !divider) return;
    const containerWidth = container.getBoundingClientRect().width;
    const minX = containerWidth * 0.05;
    const maxX = containerWidth * 0.45;

    const initialX = (leftWidth / 100) * containerWidth;
    gsap.set(divider, { x: initialX });
    gsap.set(leftPanelRef.current, { width: `${leftWidth}%` });

    const draggable = Draggable.create(divider, {
      type: 'x',
      bounds: { minX, maxX },
      onDrag: function () {
        updatePanels(this.x, containerWidth, minX, maxX);
      },
      onRelease: function () {
        setLeftWidth((this.x / containerWidth) * 100);
      },
    })[0];
    draggableRef.current = draggable;

    const handleResize = () => {
      const container = containerRef.current;
      const divider = dividerRef.current;
      if (!container || !divider || !draggableRef.current) return;
      const containerWidth = container.getBoundingClientRect().width;
      const minX = containerWidth * 0.05;
      const maxX = containerWidth * 0.45;
      draggableRef.current.applyBounds({ minX, maxX });
      // Recalculate divider position based on current leftWidth
      const newX = (leftWidth / 100) * containerWidth;
      gsap.set(divider, { x: newX });
      gsap.set(leftPanelRef.current, { width: `${leftWidth}%` });
      updatePanels(newX, containerWidth, minX, maxX);
      draggableRef.current.update();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      Draggable.get(divider)?.kill();
      draggableRef.current = null;
    };
  }, [leftWidth]);

  const animateDragTo = (xTarget: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerWidth = container.getBoundingClientRect().width;
    const minX = containerWidth * 0.05;
    const maxX = containerWidth * 0.45;

    gsap.to(dividerRef.current, {
      x: xTarget,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        const x = gsap.getProperty(dividerRef.current!, "x") as number;
        updatePanels(x, containerWidth, minX, maxX);
      },
      onComplete: () => {
        setLeftWidth((xTarget / containerWidth) * 100);
        draggableRef.current?.update();
      }
    });
  };

  const handleButtonClick = () => {
    const container = containerRef.current;
    if (!container) return;
    const containerWidth = container.getBoundingClientRect().width;
    const minX = containerWidth * 0.05;
    const maxX = containerWidth * 0.45;
    animateDragTo(isMaximized ? minX : maxX);
    setIsMaximized(!isMaximized);
  };

  return (
    <section className="perfil-section" id="perfil">
      <div className="container" ref={containerRef}>
        <div className="lado-izquierdo" ref={leftPanelRef} style={{ width: `${leftWidth}%` }} >
          <div className="perfil-sobreMi">
            <Contacto />
          </div>
        </div>

        <div className="divider" id="divider" ref={dividerRef}>
          <img className='perfil-foto' src={foto} alt="Foto de perfil" />
          <div className='button-content'>
            <button onClick={handleButtonClick}>{buttonText}</button>
          </div>
        </div>

        <div className="perfil-info">
          <video src={video} autoPlay loop muted className="video-background">
            <source src={video} type="video/mp4" />
          </video>
          <div className='mask' ref={rightPanelRef}>
            <div className="split" id='split'>
              <h1 className="perfil-nombre">{spanish ? information.nombre : information.name} </h1>
              <h3 className="perfil-titulo">{spanish ? information.subTitulo : information.subTitle}</h3>
              <label className="perfil-descripcion">{spanish ? information.descripción : information.description}</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;

