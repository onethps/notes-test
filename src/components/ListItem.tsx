import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  id: string;
  note: string;
  activeLink: boolean;
  date: string;
}

export const ListItem: FC<ListItemProps> = ({
  id,
  note,
  activeLink,
  date,
  ...props
}) => {
  return (
    <Link to={"/" + id}>
      <li
        className={cn("min-w-[300px] bg-white min-h-[100px] p-2 rounded", {
          "bg-yellow-200": activeLink,
        })}
        {...props}
      >
        <div>
          <h3> {!note ? "New note" : note}</h3>
          <p className="text-gray-400">{date}</p>
        </div>
      </li>
    </Link>
  );
};
