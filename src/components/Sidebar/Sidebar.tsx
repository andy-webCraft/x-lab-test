import React, { FC, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "components/common/MenuItem/MenuItem";
import { menuItems } from "./dataMenu";
import { MenuPathsType } from "types/index.type";
import CollapseMenu from "components/common/CollapseMenu/CollapseMenu";
import { appPaths } from "types/utils";
import s from "./Sidebar.module.scss";

type SidebarProps = {
  onCloseCallback?: () => void;
};

const Sidebar: FC<SidebarProps> = ({ onCloseCallback }) => {
  let [selected, setSelected] = useState<MenuPathsType>(appPaths.index);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname as MenuPathsType;
    setSelected(path);
  }, [location.pathname]);

  const onChangeSelected = (value: MenuPathsType) => {
    navigate(value);
    onCloseCallback && onCloseCallback();
  };

  return (
    <div className={s.wrapper}>
      <h3>Меню</h3>

      <ul className={s.menu}>
        {menuItems.map((item) => {
          if (item.subMenu) {
            return (
              <CollapseMenu
                key={item.path}
                titleComponent={
                  <MenuItem menuItem={item} selected={selected === item.path} />
                }
              >
                {item.subMenu.map((subItem) => {
                  return (
                    <MenuItem
                      key={subItem.path}
                      menuItem={subItem}
                      selected={selected === subItem.path}
                      selectCallback={onChangeSelected}
                    />
                  );
                })}
              </CollapseMenu>
            );
          } else {
            return (
              <MenuItem
                key={item.path}
                menuItem={item}
                selected={selected === item.path}
                selectCallback={onChangeSelected}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
