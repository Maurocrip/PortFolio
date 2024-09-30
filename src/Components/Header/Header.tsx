import "./Header.css";

type Props = {};
export default function Header({}: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, offset: number) => {
    event.preventDefault(); // Evitar comportamiento por defecto del enlace

    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.slice(1); // Remover el "#" para obtener el ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      <header>
        <div className="header">
          <ul>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, -8000);
                }}
                href="#introduccion"
              >
                Informacion
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, -50);
                }}
                href="#AboutMe"
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, -80);
                }}
                href="#habilidades"
              >
                Tecnologias
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, -80);
                }}
                href="#proyectos"
              >
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
