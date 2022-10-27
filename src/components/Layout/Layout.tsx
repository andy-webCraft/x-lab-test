import React, { FC, useState, PropsWithChildren, useContext } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Context } from "context";
import cn from "classnames";
import s from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { isMobile } = useContext(Context);

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header menuToggleCallback={menuToggleHandler} />
      <main className={s.container}>
        <div
          className={cn([
            s.sidebar,
            { [s.mobile]: isMobile, [s.isOpen]: menuOpen },
            "customScroll",
          ])}
        >
          <Sidebar onCloseCallback={isMobile ? menuToggleHandler : undefined} />
        </div>

        <div className={cn([s.content, "customScroll"])}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
