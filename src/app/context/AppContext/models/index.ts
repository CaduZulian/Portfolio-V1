import { Dispatch, SetStateAction } from 'react';

import { ILanguages, translations } from '@/app/constants';

export interface IGithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
}

export interface AppContextProps {
  t: (typeof translations)['pt' | 'en'];
  language: ILanguages;
  setLanguage: Dispatch<SetStateAction<ILanguages>>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  githubUserData: any;
  githubReposData: IGithubRepository[];
}
