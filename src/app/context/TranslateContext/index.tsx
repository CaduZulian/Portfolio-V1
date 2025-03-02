'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { languages, translations } from '@/app/constants';

// types
import { TranslateContextProps } from './models';

const TranslateContext = createContext({} as TranslateContextProps);

function TranslateContextProvider({ children }: any) {
  const getSystemLanguage = () => {
    const localNavigator = typeof navigator !== 'undefined' ? navigator : null;
    const systemLanguage = localNavigator?.language;

    return (
      languages.find((lang) => lang.name === systemLanguage) || languages[0]
    );
  };

  const [language, setLanguage] = useState(getSystemLanguage);

  const t = useMemo(() => {
    return translations[language.name];
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language.name;
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
