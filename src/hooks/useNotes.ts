import { useContext, useState } from "react";
import {} from "../lib/db";
import { store } from "../lib/store";
import { AppContext, Note } from "../context/AppContext";

export const useNotes = () => {
  const { notes, setNotesState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setNote = async (note: Note) => {
    setLoading(true);
    try {
      await store.putValue("notes", note);
      const data = await store.getAllValue("notes");
      setNotesState(data);
    } catch (err) {
      setError(err as any);
    } finally {
      setLoading(false);
    }
  };

  const getNote = async (id: string) => {
    setLoading(true);
    try {
      await store.getValue("notes", id);
    } catch (err) {
      setError(err as any);
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async (id: string) => {
    setLoading(true);
    try {
      await store.deleteValue("notes", id);
      const data = await store.getAllValue("notes");
      setNotesState(data);
    } catch (err) {
      setError(err as any);
    } finally {
      setLoading(false);
    }
  };

  return {
    notes,
    setNote,
    getNote,
    deleteNote,
  };
};
