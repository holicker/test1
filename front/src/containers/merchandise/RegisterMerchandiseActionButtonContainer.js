import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../components/common/WriteActionButton";
import { getByUserid } from "../../modules/vendor";
import { writeMerchandise } from "../../modules/write";

const RegisterMerchandiseActionButtonContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const { vendorid, title, body, price, merchandise, merchandiseError } =
    useSelector(({ write, vendor }) => ({
      vendorid: vendor.vendorid,
      title: write.title,
      body: write.body,
      price: write.price,
      merchandise: write.merchandise,
      merchandiseError: write.merchandiseError,
    }));

  const onPublish = () => {
    dispatch(writeMerchandise({ vendorid, title, body, price }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (merchandise) {
      const { id } = merchandise;
      history.push(`/merchandise/view/${id}`);
    }
    if (merchandiseError) {
      console.log(merchandiseError);
    }
  }, [history, merchandise, merchandiseError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(RegisterMerchandiseActionButtonContainer);
