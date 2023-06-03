'use client';

import { createContext, useContext, useState } from 'react';

import { languages, translations } from '@/app/constants';

// types
import { TranslateContextProps } from './models';

const TranslateContext = createContext({} as TranslateContextProps);

function TranslateContextProvider({ children }: any) {
  const [language, setLanguage] = useState(languages[0]);

  const t = translations[language.name];

  return (
    <TranslateContext.Provider
      value={{
        t,
        language,
        setLanguage,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

const useTranslation = () => {
  return useContext(TranslateContext);
};

export { useTranslation, TranslateContextProvider };
