import React, { useEffect } from "react";
import ShopLoginUi from "../../../components/Shop/ShopLoginUi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginShopPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isSeller, seller, isLoading, navigate]);

  return (
    <div>
      <ShopLoginUi />
    </div>
  );
};

export default LoginShopPage;
