import React, { FC, useState } from "react";
import { api } from "api/index.api";
import SearchBox from "components/SearchBox/SearchBox";
import AddressList from "components/AddressList/AddressList";
import PageTitle from "components/common/PageTitle/PageTitle";
import Loader from "components/common/Loader/Loader";
import s from "./SearchPage.module.scss";

const SearchPage: FC = () => {
  let [addressList, setAddressList] = useState<Array<string>>([]);
  let [emptyResponse, setEmptyResponse] = useState<boolean>(false);
  let [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAddressHandler = async (value: string) => {
    setIsLoading(true);
    try {
      setEmptyResponse(false);
      const response = await api.getAddresses(value);
      const result = response.suggestions.map((item) => item.value);
      result.length === 0 && setEmptyResponse(true);
      setAddressList(result);
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <PageTitle title="Поиск адресов" subtitle="Введите интересующий вас адрес" />

      <SearchBox submitCallback={fetchAddressHandler} />

      {isLoading && <Loader />}

      <div className={s.body}>
        {addressList.length > 0 && <AddressList addressList={addressList} />}
        {emptyResponse && <span>Ничего не найднено</span>}
      </div>
    </section>
  );
};

export default SearchPage;
