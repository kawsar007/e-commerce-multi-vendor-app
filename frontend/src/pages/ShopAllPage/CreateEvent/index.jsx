import React from "react";
import DashboardHeader from "../../../components/ShopDashboard/Layout/DashboardHeader";
import DashboardSidebar from "../../../components/ShopDashboard/Layout/DashboardSidebar";
import CreateEvent from "../../../components/Shop/CreateEvent";

const CreateEventPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
              <DashboardSidebar active={6} />
          </div>
          <div className="w-full justify-center flex">
              <CreateEvent />
          </div>
      </div>
    </div>
    );
};

export default CreateEventPage;
