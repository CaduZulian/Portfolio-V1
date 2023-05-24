'use client';

import { createContext, useContext, useState } from "react";

// icons
import BrazilianIcon from "@/assets/icons/brazilian-icon.svg";
import UnitedStatesIcon from "@/assets/icons/united-states-icon.svg";

// types
import { AppContextProps } from "./models";

const AppContext = createContext({} as AppContextProps);
export const languages = [
  { name: "pt-br", icon: BrazilianIcon },
  { name: "en", icon: UnitedStatesIcon },
];

function AppContextProvider({ children }: any) {
  const languages = [
    { name: "pt-br", icon: BrazilianIcon },
    { name: "en", icon: UnitedStatesIcon },
  ];

  const [language, setLanguage] = useState(languages[0]);

  return (
    <AppContext.Provider value={{ languages, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };