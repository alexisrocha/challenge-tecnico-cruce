import React from "react";
import { Route, Switch } from "react-router";
import PaginaPrincipalContainer from "./home/PaginaPrincipalContainer";

const Main = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={PaginaPrincipalContainer} />
      </Switch>
    </>
  );
};

export default Main;
