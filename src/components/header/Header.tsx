import { BellIcon, LogoIcon } from "../../shared";

import style from "./Header.module.scss";
import { MobileMenu } from "../mobileMenu/MobileMenu";
import { Location } from "../location/Location";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link className={style.logoWrapper} to="/">
          <LogoIcon className={style.logo} />
        </Link>
        <div className={style.right}>
          <div className={style.location}>
            <Location />
          </div>
          <Link className={style.bellWrapper} to={"/"}>
            <BellIcon />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
