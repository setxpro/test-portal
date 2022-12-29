import React from "react";
import { Route, Routes } from "react-router-dom";
import Tables from "../Components/Tables";
import TablesCC from "../Components/Tables/TableCC";
import BillsToPay from "../Pages/BillsToPay";
import Dashboards from "../Pages/Dashboards";
import Initialpage from "../Pages/Initialpage";
import Signin from "../Pages/Login/Signin";
import SecurityElements from "../Security";
import Layout from "./../Components/Layout/index";
import ForgetPass from "./../Pages/Login/ForgetPass/index";
import SignUp from "./../Pages/Login/SignUp/index";
import Modal from "./../Pages/Modal/index";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/forget-pass" element={<ForgetPass />} />
      <Route
        path="/"
        element={
          <SecurityElements>
            <Layout>{<Initialpage />}</Layout>
          </SecurityElements>
        }
      />
      <Route
        path="/dashboards"
        element={
          <SecurityElements>
            <Layout>{<Dashboards />}</Layout>
          </SecurityElements>
        }
      />
      <Route
        path="/bills-to-pay"
        element={
          <SecurityElements>
            <Layout>
              {
                <BillsToPay>
                  <Tables />
                </BillsToPay>
              }
            </Layout>
          </SecurityElements>
        }
      />
      <Route
        path="/cc"
        element={
          <SecurityElements>
            <Layout>
              {
                <BillsToPay>
                  <TablesCC />
                </BillsToPay>
              }
            </Layout>
          </SecurityElements>
        }
      />
      <Route
        path="/modal/:id"
        element={
          <SecurityElements>
            <Modal />
          </SecurityElements>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
