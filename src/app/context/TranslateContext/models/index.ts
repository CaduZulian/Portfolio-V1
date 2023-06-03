import { Dispatch, SetStateAction } from 'react';

import { ILanguages, translations } from '@/app/constants';

export interface TranslateContextProps {
  t: (typeof translations)['pt' | 'en'];
  language: ILanguages;
  setLanguage: Dispatch<SetStateAction<ILanguages>>;
}
