import me from "../../assets/yo.jpg";
import proyecto from "../../Interfaces/IProyecto";
import "./Proyecto.css";

export default function Proyecto({ titulo, descripcion, image = me, Codigo, Pagina }: proyecto) {
  return (
    <>
      <div className="contenido">
        <img src={image} alt="foto Proyecto" />
        <div className="textos">
          <h2>{titulo.toUpperCase()}</h2>
          <label>{descripcion}</label>
          <div className="botones">
            <a className="codigo" href={Codigo} target="_blank">
              Codigo
            </a>
            <a className="pagina" href={Pagina} target="_blank">
              Pagina
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
