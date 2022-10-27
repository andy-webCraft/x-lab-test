import React, { FC } from "react";
import s from "./AddressList.module.scss";

type AddressListProps = {
  addressList: Array<string>;
};

const AddressList: FC<AddressListProps> = ({ addressList }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Адреса</h2>

      <ul className={s.list}>
        {addressList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
