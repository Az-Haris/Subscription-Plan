import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import PlanDetails from "../pages/PlanDetails";
import About from "../pages/About";
import OTTPlans from "../pages/OTTPlans";
import BrilliantRecharge from "../pages/BrilliantRecharge";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage></ErrorPage>} />
      <Route element={<App></App>}>
        <Route index element={<Home></Home>} />
        <Route path="plan/:id" element={<PlanDetails></PlanDetails>} />
        <Route path="ott-plans/plan/:id" element={<PlanDetails></PlanDetails>} />
        <Route path="about" element={<About></About>} />
        <Route path="ott-plans" element={<OTTPlans></OTTPlans>} />
        <Route path="brilliant-recharge" element={<BrilliantRecharge></BrilliantRecharge>} />
        <Route path="/privacy" element={<Privacy></Privacy>} />
        <Route path="/terms" element={<Terms></Terms>} />
      </Route>
    </Routes>
  );
};

export default Router;
