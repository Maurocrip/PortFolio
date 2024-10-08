import "./Introduccio.css";
import me from "../../assets/yo.jpg";
import pdf from "../../Public/CV-Mauro Racioppi.pdf";
import Swal from "sweetalert2";
type Props = {};
export default function ({}: Props) {
  function HandlePdf() {
    window.open(pdf, "_blank");
  }

  function HandleEmail() {
    navigator.clipboard.writeText("mauroracioppi@gmail.com").then(() => {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        background: "#00b500",
        color: "white",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      }).fire("Correo copiado con exito!!");
    });
  }

  return (
    <>
      <section id="introduccion">
        <div className="Introduccion">
          <div className="Introduccion-información">
            <div className="Introduccion-trabajo">
              <h1>Mauro Hernan Racioppi</h1>
              <h2 style={{ color: "#008acf", fontSize: "xx-large" }}>Desarrollador Front-End</h2>
              <strong style={{ color: "#e5cd50", fontSize: "larger" }}>
                Joven desarrollador, apacionado por la informatica.
              </strong>
            </div>
            <div>
              <img src={me} alt="foto mia" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
                <a href="https://www.linkedin.com/in/mauro-racioppi-940169314/" target="_blank">
                  Linkedin
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
                <a href="https://github.com/Maurocrip?tab=repositories/" target="_blank">
                  Github
                </a>
              </li>
              <li onClick={HandlePdf}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                >
                  <g fill="currentColor">
                    <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" />
                    <path
                      fill-rule="evenodd"
                      d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1"
                      clip-rule="evenodd"
                    />
                  </g>
                </svg>
                Curriculum
              </li>
              <li onClick={HandleEmail}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    color="currentColor"
                  >
                    <path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5" />
                    <path d="M21.996 10.502a79 79 0 0 0-.012-.976c-.065-3.066-.098-4.6-1.229-5.735s-2.705-1.175-5.854-1.254c-1.94-.05-3.862-.05-5.802 0c-3.149.079-4.723.118-5.854 1.254S2.08 6.46 2.015 9.526a69 69 0 0 0 0 2.953c.066 3.066.099 4.6 1.23 5.735S5.95 19.39 9.099 19.47c.608.015 1.397.025 1.901.031m4.586-.853c-.629.369-2.277 1.121-1.273 2.063c.49.46 1.037.789 1.723.789h3.92c.686 0 1.233-.329 1.723-.789c1.004-.942-.644-1.694-1.273-2.063a4.8 4.8 0 0 0-4.82 0" />
                    <path d="M19.996 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  </g>
                </svg>
                Email
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
