import cn from "classnames";
import { LocationIcon } from "../../shared";

import style from "./Location.module.scss";

interface IProps {
  currentLocation?: string;
  forMobileMenu?: boolean;
}

export const Location = ({
  currentLocation = "Москва и область",
  forMobileMenu,
}: IProps) => {
  return (
    <div
      className={cn(style.location, {
        [style.forMobileMenu]: forMobileMenu,
      })}
    >
      <LocationIcon />
      <div>{currentLocation}</div>
    </div>
  );
};
