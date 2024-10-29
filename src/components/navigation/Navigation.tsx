import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";

interface IProps {
  menuData: { id: number; title: string }[];
  activeId: number;
  setActiveId: (id: number) => void;
}

export const Navigation = ({ menuData, activeId, setActiveId }: IProps) => (
  <nav className={style.nav}>
    <ul className={style.list}>
      {menuData.map((menuItem) => (
        <li
          className={activeId === menuItem.id ? style.itemActive : style.item}
          key={menuItem.id}
          onClick={() => setActiveId(menuItem.id)}
        >
          <Link to={"/"}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
