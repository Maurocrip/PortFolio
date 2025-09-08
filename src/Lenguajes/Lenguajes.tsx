import "./Lenguajes.css";
import FloatingIcon from './FloatingIcon';

const lenguajesFront = [
  { nombre: "React", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { nombre: "HTML5", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nombre: "CSS3", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

const lenguajesBack = [
  { nombre: "Node.js", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { nombre: "Express", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { nombre: "Python", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const utilidades = [
  { nombre: "Git", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { nombre: "VSCode", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { nombre: "Figma", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function Lenguajes() {
  return (
    <section className="lenguajes-section">
      <h2>Lenguajes y Herramientas</h2>
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
          <h3>Utilidades</h3>
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
