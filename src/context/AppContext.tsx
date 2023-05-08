import {
  FC,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { store } from "../lib/store";
import { Spinner } from "../components/Spinner";

export interface Note {
  id: string;
  note: string;
}

export interface IAppContext {
  notes: Note[];
  setNotesState: (notes: Note[]) => void;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
  setNotesState: () => undefined,
  editMode: false,
  setEditMode: () => undefined,
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notesState, setNotesState] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const initNotesStore = async () => {
    try {
      await store.createObjectStore(["notes"]);
      const data = await store.getAllValue("notes");
      setNotesState(data);
    } catch (err) {
      console.info(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initNotesStore();
  }, []);

  return (
    <AppContext.Provider
      value={{ notes: notesState, setNotesState, editMode, setEditMode }}
    >
      {loading ? <Spinner /> : children}
    </AppContext.Provider>
  );
};
