import { Dispatch, SetStateAction } from "react";

export interface AppContextProps {
  languages: {
    name: string;
    icon: any;
  }[];
  language: {
    name: string;
    icon: any;
  };
  setLanguage: Dispatch<SetStateAction<{ name: string; icon: any }>>;
}
