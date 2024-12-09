import { useContext } from "react";
import { lenguagueContext } from "../../Services/Lenguague";
import "./Header.css";

export default function Header() {
  const { spanish, setSpanish, titulos } = useContext(lenguagueContext);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, offset: number) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = targetId && document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    setSpanish(!spanish);
  };

  const menuItems = [
    {
      href: "#introduccion",
      label: spanish ? titulos.informacion : titulos.information,
      offset: -8000,
    },
    { href: "#AboutMe", label: spanish ? titulos.sobreMí : titulos.aboutMe, offset: -50 },
    {
      href: "#habilidades",
      label: spanish ? titulos.tecnologías : titulos.technologies,
      offset: -80,
    },
    { href: "#proyectos", label: spanish ? titulos.proyectos : titulos.proyects, offset: -80 },
  ];

  return (
    <header>
      <div className="header">
        <ul>
          {menuItems.map(({ href, label, offset }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleClick(e, offset)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="Div-lenguagues">
          <button className="Button-lenguagues" onClick={toggleLanguage}>
            <img
              src={
                spanish
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png?20120912082242"
                  : "//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
              }
              alt={spanish ? "Cambiar a inglés" : "Switch to Spanish"}
              width="99%"
              height="99%"
              onClick={toggleLanguage}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
