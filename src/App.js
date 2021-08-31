import React from "react";
import './styles/App.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import {routes} from "./router";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {routes.map(route =>
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
          />)}
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
