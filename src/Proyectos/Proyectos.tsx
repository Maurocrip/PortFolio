import './Proyectos.css';
import ProyectoCard from './ProyectoCard';
import clinicaFoto from '../assets/ClinicaOnline.png';
import carritoOnlineFoto from '../assets/Carrito.jpeg';
import todoListFoto from '../assets/ToDoList.png';
import salaJuegosFoto from '../assets/SalaDeJuegos.jpeg';

export interface ProyectoCompleto {
  titulo: string;
  descripcion: string;
  imagen: string;
  pagina: string;
  codigo: string;
  height: number;
}

const proyectos: ProyectoCompleto[] = [
  { 
    titulo: 'CLINICA ONLINE', 
    descripcion: 'Es una pagina que simula ser una clinica online, en esta podes logiarte como paciente, doctor o administrador. Segun el rol podes sacar turnos, establecer dias y horario de trabajo, eliminar o rechazar usuarios, descargar historial clinico, etc.', 
    imagen: clinicaFoto,
    pagina: "https://hospitalonline-54e32.web.app/home",
    codigo: "https://github.com/Maurocrip/Hospital-Virtual",
    height: 600
  },
  { 
    titulo: 'SALA DE JUEGOS', 
    descripcion: 'Una pagina web que simula una sala de juegos, en la cual te tendras que loguear y al ingresar podras accerder a 4 tipos de juegos: ahorcado, una trivia de preguntas, mayor o menos y el blackjact', 
    imagen: salaJuegosFoto,
    pagina: "https://sala-de-juegos-2a66d.web.app/home",
    codigo: "https://github.com/Maurocrip/Sala-de-Juegos",
    height: 800
  },
  { 
    titulo: 'CARRITO ONLINE', 
    descripcion: 'Simula la compra de productos de alguna tienda, donde puedes agregar productos a un carrito, eliminarlos del carrito, aumentar o disminuir su cantidad y filtrar los productos.', 
    imagen: carritoOnlineFoto,
    pagina: "https://carritodelacompra.vercel.app/",
    codigo: "https://github.com/Maurocrip/Carrito-de-compra",
    height: 700
  },
  { 
    titulo: 'LISTA DE HACERES', 
    descripcion: 'Una pagina que sirve como una lista de cosas para hacer, es simple pero practica. Anotas algo que tengas que hacer y una vez que lo has hecho la tachas o la eliminas, tambien puedes filtrar las diferentes tareas.', 
    imagen: todoListFoto,
    pagina: "https://to-do-list-sigma-lime.vercel.app/",
    codigo: "https://github.com/Maurocrip/To-do-list",
    height: 550
  },
];

const Proyectos = () => {
  const cal1 : Array<ProyectoCompleto> = proyectos.filter((_, i) => i % 2 === 0);
  const cal2 : Array<ProyectoCompleto> = proyectos.filter((_, i) => i % 2 === 1);

  return (
    <section className="proyectos-section" id='proyectos'>
      <h1>Mis Proyectos</h1>
      <div className='grid-proyecto'>
        <div className='col'>{cal1.map((proyecto, id) => {
          return (
            <ProyectoCard
              key={id}
              proyecto={proyecto}
            />
          );
        })}</div>
        <div className='col'>{cal2.map((proyecto, id) => {
          return (
            <ProyectoCard
              key={id}
              proyecto={proyecto}
            />
          );
        })}</div>
      </div>
    </section>
  );
};

export default Proyectos;