import "./Lenguajes.css";
import FloatingIcon from './FloatingIcon';
import { lenguagueContext } from '../../Services/Lenguague';
import { useContext } from 'react';
import { lenguajesFront, lenguajesBack, utilidades } from '../../Const/Lenguajes.ts';

function Lenguajes() {
  const { spanish, titulos} = useContext(lenguagueContext);
  const ArrayLenguajes : {Type: string, lenguajes: {icono: string, nombre: string}[]}[] = [{Type: 'Frontend', lenguajes: lenguajesFront},{Type: 'Backend', lenguajes: lenguajesBack},{Type: spanish ? 'Utilidades' : 'Utilities', lenguajes: utilidades}];

  return (
    <section className="lenguajes-section" id='habilidades'>
      <h2>{spanish ? titulos.tecnologías : titulos.technologies}</h2>
      <div className="lenguajes-container">
        {
          ArrayLenguajes.map((grupo) => (
            <div className="lenguajes-grupo">
              <h3>{grupo.Type}</h3>
              <div className="lenguajes-lenguajes-iconos">
                {grupo.lenguajes.map((l) => (
                  <FloatingIcon key={l.nombre} icono={l.icono} nombre={l.nombre} />
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}


export default Lenguajes;
