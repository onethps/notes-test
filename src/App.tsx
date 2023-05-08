import { Workspace } from "./components/Workspace";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="relative flex w-full pt-[65px] bg-gray-50 min-h-screen overflow-hidden">
        <Sidebar />
        <Workspace />
      </div>
    </>
  );
}

export default App;
