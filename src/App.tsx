import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";
import { Layout } from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Workspace />
    </Layout>
  );
}

export default App;
