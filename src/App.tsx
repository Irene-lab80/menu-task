import { useState } from "react";

import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import { menuData } from "./utils/menuData";

function App() {
  const [activeId, setActiveId] = useState(menuData[0].id);

  return (
    <div>
      <Header />
      <Navigation
        activeId={activeId}
        setActiveId={setActiveId}
        menuData={menuData}
      />
    </div>
  );
}

export default App;
