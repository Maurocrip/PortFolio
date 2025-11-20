import clinicaFoto from '../assets/ClinicaOnline.png';
import carritoOnlineFoto from '../assets/Carrito.jpeg';
import todoListFoto from '../assets/ToDoList.png';
import salaJuegosFoto from '../assets/SalaDeJuegos.jpeg';
import type { IProyecto } from '../Interfaces/IProyecto';

export const proyectos: IProyecto[] = [
  { 
    Español: { 
      titulo: 'CLINICA ONLINE', 
      descripcion: 'Es una pagina que simula ser una clinica online, en esta podes logiarte como paciente, doctor o administrador. Segun el rol podes sacar turnos, establecer dias y horario de trabajo, eliminar o rechazar usuarios, descargar historial clinico, etc.'
    },
    Ingles: {
      titulo: 'ONLINE CLINIC',
      descripcion: 'It is a page that simulates being an online clinic, where you can log in as a patient, doctor or administrator. Depending on the role, you can make appointments, set days and working hours, delete or reject users, download medical history, etc.',
    },  
    imagen: clinicaFoto,
    pagina: "https://hospitalonline-54e32.web.app/home",
    codigo: "https://github.com/Maurocrip/Hospital-Virtual",
    height: 600
  },
  { 
    Español: { 
        titulo: 'SALA DE JUEGOS', 
        descripcion: 'Una pagina web que simula una sala de juegos, en la cual te tendras que loguear y al ingresar podras accerder a 4 tipos de juegos: ahorcado, una trivia de preguntas, mayor o menos y el blackjact', 
    },
    Ingles: {
      titulo: 'GAME ROOM',
      descripcion: 'A web page that simulates a game room, where you have to log in and upon entering you can access 4 types of games: hangman, a trivia quiz, higher or lower, and blackjack.',
    },
    imagen: salaJuegosFoto,
    pagina: "https://sala-de-juegos-2a66d.web.app/home",
    codigo: "https://github.com/Maurocrip/Sala-de-Juegos",
    height: 800
  },
  { 
    Español: { 
      titulo: 'CARRITO ONLINE', 
      descripcion: 'Simula la compra de productos de alguna tienda, donde puedes agregar productos a un carrito, eliminarlos del carrito, aumentar o disminuir su cantidad y filtrar los productos.',
    },
    Ingles: {
      titulo: 'ONLINE CART',
      descripcion: 'Simulates the purchase of products from a store, where you can add products to a cart, remove them from the cart, increase or decrease their quantity, and filter the products.',
    },
    imagen: carritoOnlineFoto,
    pagina: "https://carritodelacompra.vercel.app/",
    codigo: "https://github.com/Maurocrip/Carrito-de-compra",
    height: 700
  },
  { 
    Español: { 
      titulo: 'LISTA DE HACERES', 
      descripcion: 'Una pagina que sirve como una lista de cosas para hacer, es simple pero practica. Anotas algo que tengas que hacer y una vez que lo has hecho la tachas o la eliminas, tambien puedes filtrar las diferentes tareas.',
    },
    Ingles: {
      titulo: 'TO-DO LIST',
      descripcion: 'A page that serves as a to-do list, it is simple but practical. You write down something you have to do and once you have done it you cross it out or delete it, you can also filter the different tasks.',
    },
    imagen: todoListFoto,
    pagina: "https://to-do-list-sigma-lime.vercel.app/",
    codigo: "https://github.com/Maurocrip/To-do-list",
    height: 550
  },
];