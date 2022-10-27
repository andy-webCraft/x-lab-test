import React, { FC } from "react";
import s from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
