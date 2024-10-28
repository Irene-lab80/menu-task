import { BellIcon, LocationIcon, LogoIcon } from "./shared";
import { useState } from "react";

import style from "./App.module.scss";

const menuData = [
  { id: 1, title: "Преимущества Tele2" },
  { id: 2, title: "Тарифы" },
  { id: 3, title: "Акции и спецпредложения" },
  { id: 4, title: "Промотариф Tele2" },
  { id: 5, title: "Технология eSIM" },
  { id: 6, title: "Подключение нового абонента" },
];

function App() {
  const [active, setActive] = useState(menuData[0].id);

  return (
    <div>
      <header className={style.header}>
        <div className={style.header__content}>
          <LogoIcon />
          <div className={style.rightContent}>
            <div className={style.location}>
              <LocationIcon />
              <div>Москва и область</div>
            </div>
            <BellIcon />
          </div>
        </div>
      </header>

      <nav className={style.nav}>
        <ul>
          {menuData.map((menuItem) => (
            <li
              className={active === menuItem.id ? style.itemActive : style.item}
              key={menuItem.id}
              onClick={() => setActive(menuItem.id)}
            >
              {menuItem.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
