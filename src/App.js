import React from "react";
import './styles/App.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostSingle from "./pages/PostSingle";
import NotFound from "./pages/NotFound";
import Navbar from "./components/UI/navbar/Navbar";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/about"><About/></Route>
        <Route exact path="/posts"><Posts/></Route>
        <Route exact path="/posts/:id"><PostSingle/></Route>
        <Route path="/not-found"><NotFound/></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
