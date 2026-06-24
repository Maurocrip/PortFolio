import "./Header.css";
import { useContext } from "react";
import { lenguagueContext } from "../../Services/Lenguague";
import { globalContext } from "../../Services/Global";

export default function Header() {
  const { spanish, setSpanish, titulos } = useContext(lenguagueContext);
  const { setContacto } = useContext(globalContext);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = targetId && document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset -80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleClickPerfilContact = (event: React.MouseEvent<HTMLAnchorElement>, bool: boolean) => {
    event.preventDefault();
    setContacto(bool);
    handleClick(event);
  };

  const toggleLanguage = () => {
    setSpanish(!spanish);
  };

  const menuItems = [
    { href: "#proyectos", label: spanish ? titulos.proyectos : titulos.proyects },
    { href: "#habilidades", label: spanish ? titulos.tecnologías : titulos.technologies},
  ];

  return (
    <header>
      <div className="header">
        <ul>
            <li>
              <a href='#perfil' onClick={(e) => handleClickPerfilContact(e, false)}>
                {spanish ? titulos.informacion : titulos.information}
              </a>
            </li>
            <li>
              <a href='#perfil' onClick={(e) => handleClickPerfilContact(e, true)}>
                {spanish ? titulos.contacto : titulos.contact}
              </a>
            </li>
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleClick(e)}>
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
                  ? "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                  : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              }
              alt={spanish ? "Cambiar a inglés" : "Switch to Spanish"}
              width="99%"
              height="99%"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
