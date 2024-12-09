import { useContext } from "react";
import "./Proyecto.css";
import { lenguagueContext } from "../../Services/Lenguague";

type props = {
  titulo: string;
  descripcion: string;
  image?: string;
  Codigo: string;
  Pagina: string;
};

export default function Proyecto({ titulo, descripcion, image, Codigo, Pagina }: props) {
  const { spanish } = useContext(lenguagueContext);
  return (
    <>
      <div className="contenido">
        <img src={image} alt="foto Proyecto" />
        <div className="textos">
          <h2>{titulo.toUpperCase()}</h2>
          <label>{descripcion}</label>
          <div className="botones">
            <a className="codigo" href={Codigo} target="_blank">
              {spanish ? "Codigo" : "Code"}
            </a>
            <a className="pagina" href={Pagina} target="_blank">
              {spanish ? "Pagina" : "Page"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
