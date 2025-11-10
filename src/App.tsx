import Perfil from "./Perfil/Perfil";
import Proyectos from "./Proyectos/Proyectos";
import Lenguajes from "./Lenguajes/Lenguajes";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
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
