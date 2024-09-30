import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contacto from "./Components/Contacto/Contacto";
import Habilidades from "./Components/habilidades/Habilidades";
import Header from "./Components/Header/Header";
import Introduccion from "./Components/Introduccion/Introduccion";
import Proyectos from "./Components/Proyectos/ListaProyecto";

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "0 5% 0 5%" }}>
        <Introduccion />
        <AboutMe />
        <Habilidades />
        <Proyectos />
      </div>
      <Contacto />
    </>
  );
}

export default App;