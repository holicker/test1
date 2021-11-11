import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterMerchandise from "../../components/merchandise/RegisterMerchandise";
import { changeField, initialize } from "../../modules/write";

const RegisterMerchandiseContainer = () => {
  const { title, body, price } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    price: write.price
  }));

  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <RegisterMerchandise onChangeField={onChangeField} title={title} body={body} price={price}/>
  );
};

export default RegisterMerchandiseContainer;
