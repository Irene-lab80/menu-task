import { BellIcon, LogoIcon } from "../../shared";

import style from "./Header.module.scss";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import { Location } from "../location/Location";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <LogoIcon className={style.logo} />
        <div className={style.right}>
          <div className={style.location}>
            <Location />
          </div>
          <BellIcon />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
