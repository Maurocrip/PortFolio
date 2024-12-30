import proyecto from "../Interfaces/IProyecto";
import todo from "../assets/ToDo.jpeg";
import carrito from "../assets/Carrito.jpeg";
import clinica from "../assets/clinicaOnline.jpeg";

export let listaProyectos: Array<proyecto> = [
    {
      español:{
        titulo: "Clinica online",
        descripcion: "Es una pagina que simula ser una clinica online, en esta podes logiarte como paciente, doctor o administrador. Segun el rol podes sacar turnos, establecer dias y horario de trabajo, eliminar o rechazar usuarios, descargar historial clinico, etc.",},
      ingles:{
        titulo: "Online Clinic",
        descripcion: "It is a page that simulates being an online clinic, where you can log in as a patient, doctor or administrator. Depending on the role, you can take shifts, establish work days and hours, delete or reject users, download medical history, etc.",},
      codigo: "https://github.com/Maurocrip/Hospital-Virtual",
      pagina: "https://hospitalonline-54e32.web.app/home",
      image: clinica,
    },
    {
      español:{
       titulo: "Carrito online",
      descripcion:
        "Simula la compra de productos de alguna tienda, donde puedes agregar productos a un carrito, eliminarlos del carrito, aumentar o disminuir su cantidad y filtrar los productos."},
      ingles:{
        titulo: "e-commerce",
        descripcion:
          "Simulates the purchase of products from a store, where you can add products to a cart, remove them from the cart, increase or decrease their quantity and filter the products."},
      codigo: "https://github.com/Maurocrip/Carrito-de-compra",
      pagina: "https://carritodelacompra.vercel.app",
      image: carrito,
    },
    {
      español:{
        titulo: "Lista de haceres",
      descripcion:
        "Una pagina que sirve como una lista de cosas para hacer, es simple pero practica. Anotas algo que tengas que ahcer y una vez que lo has hecho la tachas o la eliminas, tambien puedes filtrar las diferentes tareas."},
      ingles:{
        titulo: "To do list",
        descripcion: "It is a page that simulates being an online clinic, where you can log in as a patient, doctor or administrator. Depending on the role, you can take shifts, establish work days and hours, delete or reject users, download medical history, etc.",},
      codigo: "https://github.com/Maurocrip/To-do-list",
      pagina: "https://to-do-list-sigma-lime.vercel.app",
      image: todo,
    },
]