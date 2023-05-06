import { FC } from "react";
import { useNotes } from "../hooks/useNotes";

const list = ["a", "b", "c"];

export const Sidebar: FC = () => {
  return (
    <aside className="bg-gray-200 min-h-screen min-w-[300px]">
      <ul className="flex flex-col gap-1">
        {/* {users.map((item) => (
          <li className="min-w-[300px] bg-green-800 min-h-[100px]">
            {item.note}
          </li>
        ))} */}
      </ul>
    </aside>
  );
};
