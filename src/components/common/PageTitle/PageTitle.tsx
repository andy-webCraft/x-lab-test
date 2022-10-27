import React, { FC } from "react";
import s from "./PageTitle.module.scss";

type PageTitleProps = {
  title?: string;
  subtitle?: string;
};

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className={s.wrapper}>
      {title && <h2 className={s.title}>{title}</h2>}
      {subtitle && <p className={s.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
