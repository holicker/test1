import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";

const RegisterMerchandiseBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RegisterMerchandiseItem = styled(BasicItem)`
  flex: 1;

  &.writeTitle {
    flex: 0 0 3rem;
    width: 80%;
    align-self: center;
  }
  &.writeInfo {
    flex: 0 0 1rem;
  }
  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    width: 100%;
  }
`;

const RegisterMerchandise = ({ title, body, price, onChangeField }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };
  const onChangePrice = (e) => {
    onChangeField({ key: "price", value: e.target.value });
  };
  const onChangeBody = (e) => {
    onChangeField({ key: "body", value: e.target.value });
  };

  return (
    <RegisterMerchandiseBlock>
      <RegisterMerchandiseItem className="writeTitle">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        />
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeInfo">
        <input
          type="text"
          placeholder="가격"
          value={price}
          onChange={onChangePrice}
        />
      </RegisterMerchandiseItem>
      <RegisterMerchandiseItem className="writeContent">
        <textarea placeholder="설명" value={body} onChange={onChangeBody} />
      </RegisterMerchandiseItem>
    </RegisterMerchandiseBlock>
  );
};

export default RegisterMerchandise;
