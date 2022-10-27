import React, { FC } from "react";
import { IMenuItem, MenuPathsType } from "types/index.type";
import cn from "classnames";
import s from "./MenuItem.module.scss";

type MenuItemProps = {
  menuItem: IMenuItem;
  selected: boolean;
  selectCallback?: (value: MenuPathsType) => void;
};

const MenuItem: FC<MenuItemProps> = ({ menuItem, selected, selectCallback }) => {
  const { title, icon, path } = menuItem;

  const onClickHandler = () => {
    selectCallback!(path);
  };

  return (
    <li
      className={cn([s.wrapper, { [s.active]: selected ? true : false }])}
      onClick={selectCallback ? onClickHandler : undefined}
    >
      {icon}
      <h4>{title}</h4>
    </li>
  );
};

export default MenuItem;
