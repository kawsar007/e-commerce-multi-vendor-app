import React from "react";
import DashboardHeader from "../../../components/ShopDashboard/Layout/DashboardHeader";
import DashboardSidebar from "../../../components/ShopDashboard/Layout/DashboardSidebar";
// import CreateCoupoun from "../../../components/Shop/AllCoupons";
import AllCoupons from "../../../components/Shop/AllCoupons";

const ShopALlCoupouns = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <AllCoupons />
        </div>
      </div>
    </div>
  );
};

export default ShopALlCoupouns;
