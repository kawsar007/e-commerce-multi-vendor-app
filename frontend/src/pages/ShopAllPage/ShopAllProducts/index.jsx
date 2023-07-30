import React from "react";
import DashboardHeader from "../../../components/ShopDashboard/Layout/DashboardHeader";
import DashboardSidebar from "../../../components/ShopDashboard/Layout/DashboardSidebar";
import AllProducts from "../../../components/Shop/AllProducts";

const ShopAllProductPage = () => {
    return (
        <div>
          <DashboardHeader />
          <div className="flex justify-between w-full">
              <div className="w-[80px] 800px:w-[330px]">
                  <DashboardSidebar active={4} />
              </div>
              <div className="w-full justify-center flex">
                <AllProducts />
              </div>
          </div>
        </div>
        );
};

export default ShopAllProductPage;
