import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import Account from "components/common/Account/Account";
import { appPaths } from "types/utils";
import { Context } from "context";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo-icon.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import s from "./Header.module.scss";

type HeaderProps = {
  menuToggleCallback: () => void;
};

const Header: FC<HeaderProps> = ({ menuToggleCallback }) => {
  const { isMobile } = useContext(Context);

  return (
    <header className={s.wrapper}>
      <div className={s.item}>
        {isMobile && (
          <button className={s.menu} onClick={menuToggleCallback}>
            <MenuIcon />
          </button>
        )}
        <Link className={s.logo} to={appPaths.index}>
          <LogoIcon />
          {!isMobile && <h1>Wrench CRM</h1>}
        </Link>
      </div>

      <div className={s.item}>
        <Account />
      </div>
    </header>
  );
};

export default Header;
