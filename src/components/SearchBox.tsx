import { useEffect, useState, forwardRef } from "react";
import { Note } from "../context/AppContext";
import ReactMarkdown from "react-markdown";
import { useDebounce } from "usehooks-ts";

interface SearchBoxProps {
  searchValue: string;
  notes: Note[];
}

export const SearchBox = forwardRef<HTMLDivElement, SearchBoxProps>(
  ({ searchValue, notes }, ref) => {
    const [result, setResult] = useState<Note[]>([]);
    const debouncedValue = useDebounce<string>(searchValue, 500);
    const searchNotes = notes.filter(({ note }) =>
      note.toLowerCase().includes(debouncedValue)
    );

    useEffect(() => {
      setResult(searchNotes);
    }, [debouncedValue]);

    return (
      <div
        ref={ref}
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 min-w-[300px]"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {result.length > 0 && searchValue.length > 2 ? (
            result.map((note) => (
              <li key={note.id}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="line-clamp-1 text-sm">
                    <ReactMarkdown>{note.note}</ReactMarkdown>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <li>
              <div className="block px-4 py-2">
                <p>No results...</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
);
