import { FC } from "react";
import { useNotes } from "../hooks/useNotes";
import { Outlet, Link, useParams } from "react-router-dom";
import cn from "classnames";

export const Sidebar: FC = () => {
  const { notes } = useNotes();
  const { id } = useParams();

  const getDate = (iso: string) => new Date(Number(iso)).toLocaleString();

  return (
    <aside className="bg-gray-200 min-h-screen min-w-[300px] p-3 overflow-y-auto">
      <ul className="flex flex-col gap-1">
        {notes.map((item) => (
          <Link key={item.id} to={"/" + item.id}>
            <li
              className={cn(
                "min-w-[300px] bg-white min-h-[100px] p-2 rounded",
                {
                  "bg-yellow-200": item.id === id,
                }
              )}
            >
              <div>
                <h3> {!item.note ? "New note" : item.note}</h3>
                <p className="text-gray-400">{getDate(item.id)}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};
