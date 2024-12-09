import "./AboutMe.css";
import { useContext } from "react";
import { lenguagueContext } from "../../Services/Lenguague";

type Props = {};
export default function AboutMe({}: Props) {
  const { spanish, information, titulos } = useContext(lenguagueContext);
  return (
    <section id="AboutMe" className="centrarAboutMe">
      <div className="AboutMe">
        <h1 style={{ fontSize: "40px" }}>{spanish ? titulos.sobreMí : titulos.aboutMe}</h1>
        <div className="texto">
          <h3>{spanish ? information.sobreMi : information.aboutMe}</h3>
        </div>
      </div>
    </section>
  );
}
