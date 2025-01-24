import { useContext } from "react";
import "./Contacto.css";
import { lenguagueContext } from "../../Services/Lenguague";

export default function Contacto() {
  const { spanish, extrasTitulos } = useContext(lenguagueContext);
  return (
    <>
      <footer>
        <label>{spanish ? extrasTitulos.telefono : extrasTitulos.phone}: +54 011 6761-4244</label>
        <label>
          {spanish ? extrasTitulos.correo : extrasTitulos.mail}: mauroracioppi@gmail.com
        </label>
        <label>
          {spanish ? extrasTitulos.ubicacion : extrasTitulos.location}: Lanus, Buenos aires,
          Argentina
        </label>
      </footer>
    </>
  );
}
