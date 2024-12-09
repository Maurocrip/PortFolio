
  interface IProyecto {
    ingles: IProyectInformation;
    español: IProyectInformation;
    image?: string;
    pagina: string;
    codigo: string;
  }

  interface IProyectInformation {
    titulo: string;
    descripcion: string;
  }

  export default IProyecto