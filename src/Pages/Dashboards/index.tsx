import React from "react";
import DashboardExpenses from "../../Components/Dashboard/Expenses";
import DashboardRevenue from "../../Components/Dashboard/Revenue";
import TwoLeaveChart from "../../Components/Dashboard/TwoLeaveChart";
import * as C from "./styles";

const Dashboards: React.FC = () => {
  return (
    <C.Container>
      <C.Area>
        <div className="congratulations"></div>

        <div className="subscribers-gained">
          <DashboardExpenses />
        </div>
        <div className="orders-received">
          <DashboardRevenue />
        </div>
      </C.Area>
      <C.Area>
        <div className="avg-sessions">
          <TwoLeaveChart />
        </div>
        {/* <div className='support-tracker'>
            </div> */}
      </C.Area>
      <C.Area>
        <div className="table-clients"></div>
      </C.Area>
    </C.Container>
  );
};

export default Dashboards;
