import { IMenuItem } from "types/index.type";
import { appPaths } from "types/utils";

import { ReactComponent as HomeIcon } from "assets/icons/home-icon.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search-icon.svg";
import { ReactComponent as TableIcon } from "assets/icons/table-icon.svg";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar-icon.svg";
import { ReactComponent as GeoIcon } from "assets/icons/geo-icon.svg";
import { ReactComponent as WidgetsIcon } from "assets/icons/widgets-icon.svg";
import { ReactComponent as SettingsIcon } from "assets/icons/settings-icon.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile-icon.svg";
import { ReactComponent as FinanceIcon } from "assets/icons/finance-icon.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout-icon.svg";

export const menuItems: Array<IMenuItem> = [
  {
    title: "Главная",
    icon: <HomeIcon />,
    path: appPaths.index,
  },
  {
    title: "Поиск адресов",
    icon: <SearchIcon />,
    path: appPaths.searchAddress,
  },
  {
    title: "Таблицы",
    icon: <TableIcon />,
    path: appPaths.table,
  },
  {
    title: "Календарь",
    icon: <CalendarIcon />,
    path: appPaths.calendar,
  },
  {
    title: "Карты",
    icon: <GeoIcon />,
    path: appPaths.geo,
  },
  {
    title: "Виджеты",
    icon: <WidgetsIcon />,
    path: appPaths.widgets,
  },
  {
    title: "Настройки",
    icon: <SettingsIcon />,
    path: appPaths.settings,
    subMenu: [
      {
        title: "Настройки профиля",
        icon: <ProfileIcon />,
        path: appPaths.profile,
      },
      {
        title: "Управление финансами",
        icon: <FinanceIcon />,
        path: appPaths.finance,
      },
    ],
  },
  {
    title: "Выход",
    icon: <LogoutIcon />,
    path: appPaths.logout,
  },
];
