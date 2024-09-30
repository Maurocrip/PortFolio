import proyecto from "../Interfaces/IProyecto";
import todo from "../assets/ToDo.jpeg";
import carrito from "../assets/Carrito.jpeg";
import clinica from "../assets/clinicaOnline.jpeg";

export let listaProyectos: Array<proyecto> = [
    {
      titulo: "Clinica online",
      descripcion:
        "Es una pagina que simula ser una clinica online, en esta podes logiarte como paciente, doctor o administrador. Segun el rol podes sacar turnos, establecer dias y horario de trabajo, eliminar o rechazar usuarios, descargar historial clinico, etc.",
      Codigo: "https://github.com/Maurocrip/Hospital-Virtual",
      Pagina: "https://hospitalonline-54e32.web.app/home",
      image: clinica,
    },
    {
      titulo: "Carrito online",
      descripcion:
        "Simula la compra de productos de alguna tienda, donde puedes agregar productos a un carrito, eliminarlos del carrito, aumentar o disminuir su cantidad y filtrar los productos.",
      Codigo: "https://github.com/Maurocrip/Carrito-de-compra",
      Pagina: "https://to-do-list-bdbk.vercel.app",
      image: carrito,
    },
    {
      titulo: "Lista de haceres",
      descripcion:
        "Una pagina que sirve como una lista de cosas para hacer, es simple pero practica. Anotas algo que tengas que ahcer y una vez que lo has hecho la tachas o la eliminas, tambien puedes filtrar las diferentes tareas.",
      Codigo: "https://github.com/Maurocrip/To-do-list",
      Pagina: "https://to-do-list-sigma-lime.vercel.app",
      image: todo,
    },
]