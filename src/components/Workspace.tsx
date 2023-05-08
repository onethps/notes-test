import { FC, useState, ChangeEvent, useEffect, useRef } from "react";
import { useNotes } from "../hooks/useNotes";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useOnClickOutside, useDebounce } from "usehooks-ts";
import remarkGfm from "remark-gfm";

export const Workspace: FC = () => {
  const { id } = useParams();
  const { notes, editMode, setNote, setEditMode } = useNotes();
  const pickedNote = notes.find((note) => note.id === id)?.note;
  const [value, setValue] = useState(pickedNote || "");
  const debouncedValue = useDebounce<string>(value, 500);
  const editNoteAreaRef = useRef(null);

  useEffect(() => {
    if (!pickedNote) {
      setValue("");
      return;
    }
    setValue(pickedNote);
  }, [id]);

  useEffect(() => {
    if (id && pickedNote !== debouncedValue) {
      setNote({ id, note: debouncedValue });
    }
  }, [debouncedValue]);

  const onSetEditMode = () => setEditMode(true);
  const onDisableEditMode = () => setEditMode(false);

  useOnClickOutside(editNoteAreaRef, onDisableEditMode);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  if (!id) {
    return (
      <div className="md:ml-[330px] bg-gray-50 w-full min-h-screen flex items-center justify-center text-gray-400">
        Select or create a new note...
      </div>
    );
  }

  return (
    <main className=" flex-grow xl:ml-[330px] sm:ml-auto">
      {editMode ? (
        <textarea
          ref={editNoteAreaRef}
          className="w-full h-full p-5"
          value={value}
          onChange={onChangeNote}
          placeholder="New note..."
        />
      ) : (
        <div
          className="prose max-w-6xl p-5 text-ellipsis"
          onClick={onSetEditMode}
          role="presentation"
        >
          {value ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
          ) : (
            <p className="text-gray-400">New note...</p>
          )}
        </div>
      )}
    </main>
  );
};
