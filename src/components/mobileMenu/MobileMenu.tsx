import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "../../shared/icons";

import style from "./MobileMenu.module.scss";
import { menuData } from "../../utils/menuData";
import { Location } from "../location/Location";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref?.current?.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={style.mobileMenu}>
      <button
        aria-label="menu"
        className={style.burgerMenu}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div
        ref={ref}
        className={`${style.nav} ${menuOpen ? style.navOpen : ""}`}
      >
        <nav className={style.navWrapper}>
          <ul className={style.navList}>
            {menuData.map((menuItem) => (
              <li className={style.navItem} key={menuItem.id}>
                <Link to={menuItem.path}>{menuItem.title}</Link>
              </li>
            ))}
          </ul>
          <div className={style.locationWrapper}>
            <Location forMobileMenu />
          </div>
        </nav>
      </div>
    </div>
  );
};
