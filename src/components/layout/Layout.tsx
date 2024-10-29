import { Outlet } from "react-router-dom";

import { Header } from "../header/Header";
import { Navigation } from "../navigation/Navigation";
import { useState } from "react";
import { menuData } from "../../utils/menuData";

import style from "./Layout.module.css";

export const Layout = (): JSX.Element => {
  const [activeId, setActiveId] = useState(menuData[0].id);

  return (
    <div className={style.layout}>
      <Header />
      <Navigation
        activeId={activeId}
        setActiveId={setActiveId}
        menuData={menuData}
      />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
