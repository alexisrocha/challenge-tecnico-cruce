import React from "react";
import { Route, Switch } from "react-router";
import PaginaPrincipalContainer from "./home/PaginaPrincipalContainer";
import agregarContainer from "./agregar/AgregarContainer";
import Navbar from "./navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PaginaPrincipalContainer} />
        <Route exact path="/agregar" component={agregarContainer} />
      </Switch>
    </>
  );
};

export default Main;
