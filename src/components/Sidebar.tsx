import { FC } from "react";
import { useNotes } from "../hooks/useNotes";
import { useParams } from "react-router-dom";
import { ListItem } from "./ListItem";
import { formatDate } from "../utils/formatDate";
import { CgMenuLeftAlt } from "react-icons/cg";
import cn from "classnames";
import { MobileSidebar } from "./Drawer";
import { useDrawer } from "../hooks/useDrawer";

export const Sidebar: FC = () => {
  const { notes } = useNotes();
  const { id: noteId } = useParams();
  const { drawer, refDrawer } = useDrawer();

  const onNoteListItemClick = () => drawer.current?.toggle();

  return (
    <>
      {/* mobile burger */}
      <div>
        <button
          onClick={() => drawer.current?.show()}
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
          type="button"
          className="inline-flex items-start p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <CgMenuLeftAlt />
        </button>
      </div>
      <aside
        id="default-sidebar"
        className={cn(
          "fixed left-0 z-20 w-84 h-screen transition-transform -translate-x-full xl:translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-col gap-1">
            {notes.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                note={item.note}
                activeLink={noteId === item.id}
                date={formatDate(item.id)}
              />
            ))}
          </ul>
        </div>
      </aside>
      <MobileSidebar ref={refDrawer}>
        <ul className="flex flex-col gap-1">
          {notes.map((item) => (
            <ListItem
              onClick={onNoteListItemClick}
              key={item.id}
              id={item.id}
              note={item.note}
              activeLink={noteId === item.id}
              date={formatDate(item.id)}
            />
          ))}
        </ul>
      </MobileSidebar>
    </>
  );
};
