'use client';

import { createContext, useContext, useState, useEffect } from 'react';

import { languages, translations } from '@/app/constants';

// types
import { AppContextProps } from './models';

const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: any) {
  const [language, setLanguage] = useState(languages[0]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [githubUserData, setGithubUserData] = useState({} as any);
  const [githubReposData, setGithubReposData] = useState({} as any);

  const t = translations[language.name];

  const getGithubUserData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        next: {
          revalidate: 60 * 60, // 1 hour
        },
      }
    );
    const data = await response.json();

    setGithubUserData(data);
  };

  const getGithubReposData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`,
      {
        next: {
          revalidate: 60 * 60, // 1 hour
        },
      }
    );
    const data = await response.json();

    setGithubReposData(data);
  };

  useEffect(() => {
    getGithubUserData();
    getGithubReposData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        t,
        githubUserData,
        githubReposData,
        menuIsOpen,
        setMenuIsOpen,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };
