import { FC, useState, ChangeEvent, useEffect, useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import IndexedDb from "../lib/db";
import { useNotes } from "../hooks/useNotes";
import { AppContext } from "../context/AppContext";
import { Routes, Route, useParams } from "react-router-dom";
const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`;

export const Workspace: FC = () => {
  const { id } = useParams();
  const { getNote } = useNotes();
  const [value, setValue] = useState<string>("cascsacasccccccccccccc");

  // console.log(notes);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return (
    <main className="bg-yellow-300 flex-grow min-h-screen">
      <textarea
        className="w-full h-full p-5 first-line:font-bold first-line:text-3xl"
        value={value}
        onChange={onChangeNote}
      />
    </main>
  );
};
