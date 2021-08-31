import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {

  const {isAuth, authInProgress} = useContext(AuthContext);

  if (authInProgress) {
    return <Loader/>
  }

  return (
    <div>
      {isAuth
        ? <Switch>
          {privateRoutes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />)}
          <Redirect to="/posts" />
        </Switch>
        : <Switch>
          {publicRoutes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />)}
          <Redirect to="/login" />
        </Switch>}
    </div>
  );
};

export default AppRouter;
