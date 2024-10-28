import style from "./Navigation.module.scss";

interface IProps {
  menuData: { id: number; title: string }[];
  activeId: number;
  setActiveId: (id: number) => void;
}

export const Navigation = ({ menuData, activeId, setActiveId }: IProps) => (
  <nav className={style.nav}>
    <ul>
      {menuData.map((menuItem) => (
        <li
          className={activeId === menuItem.id ? style.itemActive : style.item}
          key={menuItem.id}
          onClick={() => setActiveId(menuItem.id)}
        >
          {menuItem.title}
        </li>
      ))}
    </ul>
  </nav>
);
