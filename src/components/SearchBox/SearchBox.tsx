import React, { FC, useContext, useState } from "react";
import { ReactComponent as SearchIcon } from "assets/icons/search-icon.svg";
import { Context } from "context";
import { ChangeEvent } from "react";
import cn from "classnames";
import s from "./SearchBox.module.scss";

type SearchBoxProps = {
  submitCallback: (value: string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ submitCallback }) => {
  let [value, setValue] = useState<string>("");
  let [error, setError] = useState<boolean>(false);

  const { isMobile } = useContext(Context);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue && newValue.trim().length < 3) setError(true);
    else setError(false);
    setValue(newValue);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (value && !error) submitCallback(value);
  };

  return (
    <form className={cn([s.wrapper, { [s.mobile]: isMobile }])} onSubmit={submitHandler}>
      <input
        type="search"
        name="search-address"
        className={s.input}
        value={value}
        onChange={onChangeHandler}
        placeholder="Введите интересующий вас адрес"
      />
      {error && <span className={s.error}>Введите значение длинее 3-х символов</span>}

      <button className={s.btn} onClick={submitHandler}>
        <SearchIcon />
        Поиск
      </button>
    </form>
  );
};

export default SearchBox;
