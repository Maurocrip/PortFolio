import "./ListaProyecto.css";
import Proyecto from "../Proyecto/Proyedcto";
import { listaProyectos } from "../../Listas/ListProyectos";
import { lenguagueContext } from "../../Services/Lenguague";
import { useContext } from "react";

export default function Proyectos() {
  const { spanish, titulos } = useContext(lenguagueContext);

  return (
    <>
      <section id="proyectos">
        <div className="Proyectos">
          <h1 style={{ fontSize: "40px" }}>{spanish ? titulos.proyectos : titulos.proyects}</h1>
          <ul className="listaProyectos">
            {listaProyectos.map((proyecto) => {
              return (
                <li>
                  <Proyecto
                    titulo={spanish ? proyecto.español.titulo : proyecto.ingles.titulo}
                    descripcion={
                      spanish ? proyecto.español.descripcion : proyecto.ingles.descripcion
                    }
                    Codigo={proyecto.codigo}
                    Pagina={proyecto.pagina}
                    image={proyecto.image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
