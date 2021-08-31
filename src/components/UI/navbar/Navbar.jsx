import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.css';
import {AuthContext} from "../../../context";
import Button from "../button/Button";

const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('is-auth');
  }

  return (
    <div className={classes.navbar}>
      <div>
        {isAuth
          ? <div className={classes.links}>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
          </div>
          : <div className={classes.links}>
            <Link to="/login">Login</Link>
          </div>
        }
      </div>
      {isAuth && <Button onClick={logout}>Logout</Button>}
    </div>
  );
};

export default Navbar;
