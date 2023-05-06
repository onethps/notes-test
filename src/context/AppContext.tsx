import {
  FC,
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";
import { store } from "../lib/store";

export interface Note {
  id: string;
  note: string;
}

export interface IAppContext {
  notes: Note[];
  setNotesState: (notes: Note[]) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
  setNotesState: (notes: Note[]) => undefined,
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notesState, setNotesState] = useState<Note[]>([]);

  useEffect(() => {
    const initNotesStore = async () => {
      await store.createObjectStore(["notes"]);
      const data = await store.getAllValue("notes");
      setNotesState(data);
    };
    initNotesStore();
  }, []);

  return (
    <AppContext.Provider value={{ notes: notesState, setNotesState }}>
      {children}
    </AppContext.Provider>
  );
};
