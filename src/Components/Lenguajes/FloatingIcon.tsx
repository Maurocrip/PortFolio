import { useRef } from 'react'; 
import { gsap } from 'gsap'; 
import { useGSAP } from '@gsap/react';

// Genera una posición "aleatoria"
const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`, // Calcula una posición vertical aleatoria entre 0% y 80% del contenedor.
    left: `${Math.random() * 80}%`, // Calcula una posición horizontal aleatoria entre 0% y 80% del contenedor.
});

const FloatingIcon = ({ icono, nombre }: { icono: string; nombre: string }) => {
    // Crea una referencia para el contenedor del ícono. GSAP la usará para apuntar al elemento a animar.
    const container = useRef(null);
    
    useGSAP(() => {
        // Establece la posición inicial del ícono de forma instantánea.
        gsap.set(container.current, getRandomPosition());

        // Función recursiva para mover el ícono a una nueva posición aleatoria.
        const moveToRandom = () => {
            gsap.to(container.current, {
                ...getRandomPosition(), // Genera un nuevo destino aleatorio.
                duration: 1, 
                ease: 'none', 
                onComplete: moveToRandom, // Cuando la animación termina, se llama a sí misma para empezar el siguiente movimiento.
            });
        };

        // Inicia el primer movimiento con un retraso aleatorio para desincronizar los íconos.
        gsap.delayedCall(Math.random() * 2, moveToRandom);

    }, { scope: container }); // El scope asegura que las animaciones se limpien correctamente cuando el componente se desmonte.


    return (
        <div ref={container} className="lenguaje-item">
            <img src={icono} alt={nombre} className="lenguaje-icono"/>
            <span className="lenguaje-nombre">{nombre}</span>
        </div>
    );
};

export default FloatingIcon;
