import { FC, useState, ChangeEvent, useEffect, useRef } from "react";
import { useNotes } from "../hooks/useNotes";
import { useParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

export const Workspace: FC = () => {
  const { id } = useParams();
  const { setNote, notes } = useNotes();

  const [currentNote, setCurrentNote] = useState("");
  const debouncedValue = useDebounce<string>(currentNote, 500);

  useEffect(() => {
    const dbNote = notes.find((note) => note.id === id)?.note;
    dbNote && setCurrentNote(dbNote);
  }, [id]);

  useEffect(() => {
    if (id && currentNote) {
      setNote({ id, note: debouncedValue });
    }
  }, [debouncedValue]);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentNote(e.target.value);

  return (
    <main className="bg-yellow-300 flex-grow min-h-screen md:ml-[330px] sm:ml-auto">
      <textarea
        className="w-full h-full p-5 first-line:font-bold first-line:text-3xl"
        value={currentNote}
        onChange={onChangeNote}
      />
    </main>
  );
};
