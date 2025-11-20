import { createContext, useState } from "react";
import { titulos } from "../Const/Titulos";
import information from "../Const/Personal";
import { extrasTitulos } from "../Const/Extras";
import { ProyectosTitulos } from "../Const/ProyectoTitulos";

export const lenguagueContext = createContext<
{
  spanish: boolean, 
  setSpanish: React.Dispatch<React.SetStateAction<boolean>>, 
  information: typeof information, 
  titulos: typeof titulos, 
  extrasTitulos: typeof extrasTitulos, 
  ProyectosTitulos: typeof ProyectosTitulos}>({spanish: true, setSpanish: () => {}, information, titulos, extrasTitulos, ProyectosTitulos});

export default function LenguagueProvider({ children }: any) {
  const [spanish, setSpanish] = useState<boolean>(true);

  return (
    <lenguagueContext.Provider value={{ spanish, setSpanish, information, titulos, extrasTitulos, ProyectosTitulos }}>
      {children}
    </lenguagueContext.Provider>
  );
}
