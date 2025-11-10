import { createContext, useState } from "react";

export const globalContext = createContext<any>({});

export default function GlobalProvider({ children }: any) {
  const [contacto, setContacto] = useState<boolean>(false);

  return (
    <globalContext.Provider value={{ contacto, setContacto }}>
      {children}
    </globalContext.Provider>
  );
}