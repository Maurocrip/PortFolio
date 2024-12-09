import { createContext, useState } from "react";
import { titulos } from "../Lenguagues/Titulos";
import information from "../Lenguagues/Personal";
import { extrasTitulos } from "../Lenguagues/Extras";

export const lenguagueContext = createContext<any>({});

export default function LenguagueProvider({ children }: any) {
  const [spanish, setSpanish] = useState<boolean>(true);

  return (
    <lenguagueContext.Provider value={{ spanish, setSpanish, information, titulos, extrasTitulos }}>
      {children}
    </lenguagueContext.Provider>
  );
}
