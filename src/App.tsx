import Perfil from "./Components/Perfil/Perfil";
import Proyectos from "./Components/Proyectos/Proyectos";
import Lenguajes from "./Components/Lenguajes/Lenguajes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LenguagueProvider from "./Services/Lenguague";
import GlobalProvider from "./Services/Global";

function App() {
  return (
    <LenguagueProvider>
      <GlobalProvider>
        <Header />
        <Perfil />
      </GlobalProvider>
        <Proyectos /> 
        <Lenguajes />
        <Footer />
    </LenguagueProvider>
  );
}

export default App;
