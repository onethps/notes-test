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
  setNotesState: () => undefined,
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notesState, setNotesState] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initNotesStore = async () => {
      setIsLoading(true);
      try {
        await store.createObjectStore(["notes"]);
        const data = await store.getAllValue("notes");
        setNotesState(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    initNotesStore();
  }, []);

  return (
    <AppContext.Provider value={{ notes: notesState, setNotesState }}>
      {isLoading ? <div>loading</div> : children}
    </AppContext.Provider>
  );
};
