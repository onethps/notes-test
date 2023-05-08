import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="text-gray-500 rounded-lg disabled:text-gray-300 text-md cursor-pointer p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      {children}
    </button>
  );
};
