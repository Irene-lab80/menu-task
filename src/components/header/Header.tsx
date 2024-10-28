import { BellIcon, LocationIcon, LogoIcon } from "../../shared";

import style from "./Header.module.scss";
import { MobileMenu } from "../mobileMenu/MobileMenu";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <LogoIcon />
        <div className={style.right}>
          <div className={style.location}>
            <LocationIcon />
            <div>Москва и область</div>
          </div>
          <BellIcon />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
