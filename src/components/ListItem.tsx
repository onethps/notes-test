import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
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
        className={cn("w-[300px] bg-white min-h-[100px] p-2 rounded", {
          "bg-yellow-200": activeLink,
        })}
        {...props}
      >
        <div>
          <h3 className="line-clamp-1 font-medium">
            {" "}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {!note ? "New note" : note}
            </ReactMarkdown>
          </h3>
          <p className="text-gray-400">{date}</p>
        </div>
      </li>
    </Link>
  );
};
