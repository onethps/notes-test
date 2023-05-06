import { FC, PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { AppContextProvider } from "../context/AppContext";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContextProvider>
      <Header />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </AppContextProvider>
  );
};
