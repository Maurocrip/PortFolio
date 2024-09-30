import "./AboutMe.css";
type Props = {};
export default function AboutMe({}: Props) {
  return (
    <section id="AboutMe" className="centrarAboutMe">
      <div className="AboutMe">
        <h1 style={{ fontSize: "40px" }}>Sobre mi</h1>
        <div className="texto">
          <h3>
            Soy Mauro Hernán Racioppi, técnico en programación con un profundo interés por el
            desarrollo y la tecnología. Mi paso por la Universidad Tecnológica Nacional me brindó
            una sólida formación en software, despertando mi curiosidad por explorar distintas áreas
            del desarrollo. Aunque no tengo experiencia laboral formal, he trabajado en proyectos
            académicos y personales que me han permitido fortalecer tanto mis habilidades técnicas
            como mi capacidad para trabajar en equipo. Actualmente, mi objetivo es avanzar hacia el
            desarrollo full-stack y seguir creciendo profesionalmente en el sector tecnológico,
            siempre comprometido con el aprendizaje continuo.
          </h3>
        </div>
      </div>
    </section>
  );
}
