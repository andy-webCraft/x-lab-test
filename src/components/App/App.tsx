import React, { FC } from "react";
import { useMobileDetect } from "hooks/index.hook";
import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Context } from "context";
import s from "./App.module.scss";

const App: FC = () => {
  const isMobile = useMobileDetect();

  return (
    <Context.Provider value={{ isMobile }}>
      <Layout>
        <Outlet />
      </Layout>
    </Context.Provider>
  );
};

export default App;
