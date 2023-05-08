import {
  FC,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
  useContext,
} from "react";
import { useNotes } from "../hooks/useNotes";
import { useParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { AppContext } from "../context/AppContext";
import ReactMarkdown from "react-markdown";

export const Workspace: FC = () => {
  const { id } = useParams();
  const { notes, editMode, setNote } = useNotes();
  const pickedNote = notes.find((note) => note.id === id)?.note;
  const [value, setValue] = useState(pickedNote || "");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    pickedNote && setValue(pickedNote);
  }, [id]);

  useEffect(() => {
    if (id && pickedNote !== debouncedValue) {
      setNote({ id, note: debouncedValue });
    }
  }, [debouncedValue]);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return (
    <main className="bg-gray-50 flex-grow min-h-screen md:ml-[330px] sm:ml-auto">
      {editMode ? (
        <textarea
          className="w-full h-full p-5 first-line:font-bold first-line:text-3xl"
          value={value}
          onChange={onChangeNote}
        />
      ) : (
        <div className="prose  max-w-5xl p-5">
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      )}
    </main>
  );
};
