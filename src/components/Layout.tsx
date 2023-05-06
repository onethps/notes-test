import { FC, PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
