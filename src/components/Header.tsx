import { FC, useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { BiTrash } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { useNotes } from "../hooks/useNotes";
import { useParams } from "react-router-dom";

import { DeleteModal } from "./DeleteModal";
import { useModal } from "../hooks/useModal";

export const Header: FC = () => {
  const { setEditMode, setNote, deleteNote } = useNotes();
  const { handleCloseModal, handleOpenModal, showModal } = useModal();
  const { id } = useParams();

  const onAddNewEmptyNote = () => {
    setNote({ note: "", id: Date.now().toString() });
  };

  const onDeleteNote = () => {
    if (!id) return;
    deleteNote(id);
    handleCloseModal();
  };

  const onSetEditMode = () => setEditMode(true);

  return (
    <>
      <header className="flex bg-gray-200 min-h-[50px] items-center py-3 px-5 justify-between border-[1px] border-b-gray-300">
        <div className="flex gap-3">
          <button onClick={onAddNewEmptyNote}>
            <GrFormAdd />
          </button>
          <button onClick={handleOpenModal}>
            <BiTrash />
          </button>
          <button onClick={onSetEditMode}>
            <SlNote />
          </button>
        </div>
        <div>
          <input />
        </div>
      </header>
      <DeleteModal
        isOpen={showModal}
        handleClose={handleCloseModal}
        deleteNote={onDeleteNote}
      />
    </>
  );
};
