import React from "react";
import PageTitle from "components/common/PageTitle/PageTitle";
import News from "components/News/News";
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section>
      <PageTitle title="Новости" subtitle="Обновление CRM до 1.2" />

      <News />
    </section>
  );
};

export default HomePage;
