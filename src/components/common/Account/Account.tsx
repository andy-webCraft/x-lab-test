import React, { FC, useContext } from "react";
import { ReactComponent as AvatarIcon } from "assets/icons/avatar-icon.svg";
import { Context } from "context";
import s from "./Account.module.scss";

const Account: FC = () => {
  const { isMobile } = useContext(Context);

  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <AvatarIcon />
      </div>
      {!isMobile && <span>Имя Фамилия</span>}
    </div>
  );
};

export default Account;
