import { FC } from "react";
import { GrFormAdd } from "react-icons/gr";
import { BiTrash } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { useNotes } from "../hooks/useNotes";

export const Header: FC = () => {
  return (
    <header className="flex bg-green-300 min-h-[50px] items-center p-3 justify-between">
      <div className="flex gap-3">
        <button>INOT</button>
        <button>
          <GrFormAdd />
        </button>
        <BiTrash />
        <SlNote />
      </div>
      <div>
        <input />
      </div>
    </header>
  );
};
