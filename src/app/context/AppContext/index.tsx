'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// types
import { AppContextProps } from './models';

const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: any) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [githubUserData, setGithubUserData] = useState({} as any);

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

  useEffect(() => {
    getGithubUserData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        githubUserData,
        menuIsOpen,
        setMenuIsOpen,
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
