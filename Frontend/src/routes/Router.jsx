import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import PlanDetails from "../pages/PlanDetails";
import Checkout from "../pages/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage></ErrorPage>} />
      <Route element={<App></App>}>
        <Route index element={<Home></Home>} />
        <Route path="plan/:id" element={<PlanDetails></PlanDetails>} />
        <Route path="checkout" element={<Checkout></Checkout>} />
      </Route>
    </Routes>
  );
};

export default Router;
