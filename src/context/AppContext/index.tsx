'use client';

import { createContext, useContext, useState } from 'react';

import { languages, translations } from '@/constants';

// types
import { AppContextProps } from './models';

const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: any) {
  const [language, setLanguage] = useState(languages[0]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const t = translations[language.name];

  return (
    <AppContext.Provider
      value={{ t, menuIsOpen, setMenuIsOpen, language, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };
