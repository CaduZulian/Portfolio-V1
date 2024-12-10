import { Dispatch, SetStateAction } from 'react';

import { ILanguages, translations } from '@/app/constants';

export interface TranslateContextProps {
  t: (typeof translations)[keyof typeof translations];
  language: ILanguages;
  setLanguage: Dispatch<SetStateAction<ILanguages>>;
}
