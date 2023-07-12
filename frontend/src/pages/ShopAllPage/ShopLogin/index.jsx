import React, { useEffect } from "react";
import ShopLoginUi from "../../../components/Shop/ShopLoginUi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginShopPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);
  console.log(seller, "Seller");

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller?._id}`);
    }
  }, []);

  return (
    <div>
      <ShopLoginUi />
    </div>
  );
};

export default LoginShopPage;
