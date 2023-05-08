import { FC, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { SlNote } from "react-icons/sl";
import { useNotes } from "../hooks/useNotes";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteModal } from "./DeleteModal";
import { useModal } from "../hooks/useModal";
import { SearchInput } from "./SearchInput";
import { SearchBox } from "./SearchBox";
import { IconButton } from "./IconButton";
import { useDropdown } from "../hooks/useDropdown";

export const Header: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { setEditMode, setNote, deleteNote, notes } = useNotes();
  const { handleCloseModal, handleOpenModal, showModal } = useModal();
  const { dropdown } = useDropdown(searchBoxRef, searchInputRef);

  const onAddNewEmptyNote = () => {
    setNote({ note: "", id: Date.now().toString() });
  };

  const onDeleteNote = () => {
    if (!id) return;
    deleteNote(id);
    handleCloseModal();
    navigate("/");
  };

  const onSetEditMode = () => setEditMode(true);
  const onCloseSearchBox = () => {
    dropdown.current?.toggle();
    setSearchValue("");
  };

  return (
    <>
      <header className="fixed z-10 w-full flex bg-gray-200 min-h-[50px] items-center py-3 px-5 justify-between border-[1px] border-b-gray-300">
        <div className="flex gap-3">
          <IconButton onClick={onAddNewEmptyNote}>
            <FiPlus />
          </IconButton>
          <IconButton onClick={handleOpenModal} disabled={!id}>
            <BiTrash />
          </IconButton>
          <IconButton onClick={onSetEditMode} disabled={!id}>
            <SlNote />
          </IconButton>
        </div>

        <SearchInput
          ref={searchInputRef}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
        />
        <SearchBox
          ref={searchBoxRef}
          searchValue={searchValue}
          notes={notes}
          handleClose={onCloseSearchBox}
        />
      </header>
      <DeleteModal
        isOpen={showModal}
        handleClose={handleCloseModal}
        deleteNote={onDeleteNote}
      />
    </>
  );
};
