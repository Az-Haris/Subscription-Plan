import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage></ErrorPage>} />
      <Route element={<App></App>}>
        <Route index element={<Home></Home>} />
      </Route>
    </Routes>
  );
};

export default Router;
