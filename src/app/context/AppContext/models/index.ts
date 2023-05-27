import { Dispatch, SetStateAction } from 'react';

import { ILanguages, translations } from '@/app/constants';

export interface AppContextProps {
  t: (typeof translations)['pt' | 'en'];
  language: ILanguages;
  setLanguage: Dispatch<SetStateAction<ILanguages>>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  githubUserData: any;
  githubReposData: any;
}
