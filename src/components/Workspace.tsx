import { FC, useState, ChangeEvent, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import IndexedDb from "../lib/db";

const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`;

export const Workspace: FC = () => {
  const [note, setNote] = useState<string>("cascsacasccccccccccccc");
  const [noteList, setNoteList] = useState([]);
  console.log(noteList, "noteLIST");

  useEffect(() => {
    const runIndexDb = async () => {
      const indexedDb = new IndexedDb("test");
      await indexedDb.createObjectStore(["books", "students"]);
      await indexedDb.putValue("books", { name: "A Game of Thrones" });
      await indexedDb.putBulkValue("books", [
        { name: "A Song of Fire and Ice" },
        { name: "Harry Potter and the Chamber of Secrets" },
      ]);
      await indexedDb.getValue("books", 1);
      const data = await indexedDb.getAllValue("books");
      setNoteList(data);
      await indexedDb.deleteValue("books", 1);
    };
    runIndexDb();
  }, []);

  const onChangeNote = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setNote(e.target.value);

  return (
    <main className="bg-yellow-300 flex-grow min-h-screen">
      <textarea
        className="w-full h-full bg-yellow-600 p-5 first-line:font-bold first-line:text-3xl"
        value={note}
        onChange={onChangeNote}
      />
    </main>
  );
};
