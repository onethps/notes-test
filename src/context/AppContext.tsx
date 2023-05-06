import {
  FC,
  ReactNode,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

export interface IAppContext {
  notes: any[];
  setNewNote?: (newNote: any) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notesState, setNotesState] = useState<any[]>([]);

  const setNewNote = (newNote: any) => {
    setNotesState(newNote);
  };

  return (
    <AppContext.Provider value={{ notes: notesState, setNewNote }}>
      {children}
    </AppContext.Provider>
  );
};
