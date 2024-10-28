import { BellIcon, LocationIcon, LogoIcon } from "./shared";
import style from "./App.module.css";

function App() {
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
    </div>
  );
}

export default App;
