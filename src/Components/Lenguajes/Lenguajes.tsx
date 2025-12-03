import "./Lenguajes.css";
import FloatingIcon from './FloatingIcon';
import { lenguagueContext } from '../../Services/Lenguague';
import { useContext } from 'react';

const lenguajesFront = [
  { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nombre: "HTML5", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { nombre: "Angular", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
  { nombre: "TypeScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const lenguajesBack = [
  { nombre: "Node.js", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nombre: "Express", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }, 
  { nombre: "Python", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { nombre: "PHP", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { nombre: "c#", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
];

const utilidades = [
  { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "VSCode", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { nombre: "Visual Studio", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" },
  { nombre: "Firebase", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { nombre: "SQL Server", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { nombre: "MySql", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

function Lenguajes() {
      const { spanish, titulos} = useContext(lenguagueContext);
  return (
    <section className="lenguajes-section" id='habilidades'>
      <h2>{spanish ? titulos.tecnologías : titulos.technologies}</h2>
      <div className="lenguajes-container">
        <div className="lenguajes-grupo">
          <h3>Frontend</h3>
          <div className="lenguajes-iconos">
            {lenguajesFront.map((l) => (
              <FloatingIcon key={l.nombre} icono={l.icono} nombre={l.nombre} />
            ))}
          </div>
        </div>
        <div className="lenguajes-grupo">
          <h3>Backend</h3>
          <div className="lenguajes-iconos">
            {lenguajesBack.map((l) => (
              <FloatingIcon key={l.nombre} icono={l.icono} nombre={l.nombre} />
            ))}
          </div>
        </div>
        <div className="lenguajes-grupo">
          <h3>{spanish ? 'Utilidades' : 'Utilities'}</h3>
          <div className="lenguajes-iconos">
            {utilidades.map((l) => (
              <FloatingIcon key={l.nombre} icono={l.icono} nombre={l.nombre} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Lenguajes;
