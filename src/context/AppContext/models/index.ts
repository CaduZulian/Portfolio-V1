import { Dispatch, SetStateAction } from 'react';

import { ILanguages, translations } from '@/constants';

export interface AppContextProps {
  t: (typeof translations)['pt' | 'en'];
  language: ILanguages;
  setLanguage: Dispatch<SetStateAction<ILanguages>>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}
