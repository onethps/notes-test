import { Workspace } from "./components/Workspace";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <Workspace />
      </div>
    </>
  );
}

export default App;
