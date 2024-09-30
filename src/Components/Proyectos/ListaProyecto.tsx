import "./ListaProyecto.css";
import Proyecto from "../Proyecto/Proyedcto";
import { listaProyectos } from "../../Listas/ListProyectos";
type Props = {};
export default function Proyectos({}: Props) {
  return (
    <>
      <section id="proyectos">
        <div className="Proyectos">
          <h1 style={{ fontSize: "40px" }}>Proyectos academicos y personales</h1>
          <ul className="listaProyectos">
            {listaProyectos.map((proyecto) => {
              return (
                <li>
                  <Proyecto
                    titulo={proyecto.titulo}
                    descripcion={proyecto.descripcion}
                    Codigo={proyecto.Codigo}
                    Pagina={proyecto.Pagina}
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
