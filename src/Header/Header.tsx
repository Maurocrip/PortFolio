import "./Header.css";
import { useContext } from "react";
import { lenguagueContext } from "../Services/Lenguague";
import { globalContext } from "../Services/Global";

export default function Header() {
  const { spanish, setSpanish, titulos } = useContext(lenguagueContext);
  const { contacto, setContacto } = useContext(globalContext);

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
  const handleClickContacto = (event: React.MouseEvent<HTMLAnchorElement>, offset: number) => {
    event.preventDefault();
    if (!contacto) {
      setContacto(true);
    }
    handleClick(event, offset);
  };
  const handleClickPerfil = (event: React.MouseEvent<HTMLAnchorElement>, offset: number) => {
    event.preventDefault();
    if (contacto) {
      setContacto(false);
    }
    handleClick(event, offset);
  };

  const toggleLanguage = () => {
    setSpanish(!spanish);
  };

  const menuItems = [
    { href: "#proyectos", label: spanish ? titulos.proyectos : titulos.proyects, offset: -80 },
    {
      href: "#habilidades",
      label: spanish ? titulos.tecnologías : titulos.technologies,
      offset: -80,
    },
  ];

  return (
    <header>
      <div className="header">
        <ul>
            <li>
              <a href='#perfil' onClick={(e) => handleClickPerfil(e, -80)}>
                {spanish ? titulos.informacion : titulos.information}
              </a>
            </li>
            <li>
              <a href='#perfil' onClick={(e) => handleClickContacto(e, -80)}>
                {spanish ? titulos.contacto : titulos.contact}
              </a>
            </li>
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
