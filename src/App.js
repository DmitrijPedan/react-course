import React, {useState, useEffect} from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(true);

   useEffect(() => {
     if (localStorage.getItem('is-auth')) {
       setIsAuth(true);
     }
     setAuthInProgress(false);
   }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, authInProgress}}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter isAuth={false}/>
      </BrowserRouter>
    </AuthContext.Provider>
  )

}

export default App;
