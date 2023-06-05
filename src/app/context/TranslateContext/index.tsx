'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { languages, translations } from '@/app/constants';

// types
import { TranslateContextProps } from './models';

const TranslateContext = createContext({} as TranslateContextProps);

function TranslateContextProvider({ children }: any) {
  const [language, setLanguage] = useState(languages[0]);

  const t = useMemo(() => {
    return translations[language.name];
  }, [language]);

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
