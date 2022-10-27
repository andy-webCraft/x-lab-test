import React, { FC, useState, PropsWithChildren } from "react";
import { ReactComponent as CollapseIcon } from "assets/icons/collapse-icon.svg";
import cn from "classnames";
import s from "./CollapseMenu.module.scss";

interface CollapseMenuProps extends PropsWithChildren {
  titleComponent: React.ReactElement;
}

const CollapseMenu: FC<CollapseMenuProps> = ({ titleComponent, children }) => {
  let [isOpen, setIsOpen] = useState<boolean>(true);

  const isOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={cn({ [s.open]: isOpen ? true : false })}>
      <ul className={s.title} onClick={isOpenToggle}>
        {titleComponent}
        <CollapseIcon />
      </ul>

      <ul className={s.body}>{children}</ul>
    </li>
  );
};

export default CollapseMenu;
