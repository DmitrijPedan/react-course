import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import Button from "../components/UI/button/Button";
import {AuthContext} from "../context";

const Login = () => {

  const [user, setUser] = useState({login: '', password: ''});
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('is-auth', 'auth');
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginBottom: '30'}}>Login page</h1>
      <form className="form" onSubmit={(event) => login(event)}>
        <MyInput
          value={user.login}
          type="text"
          placeholder="Login"
          onChange={e => setUser({...user, login: e.target.value})}
        />
        <MyInput
          value={user.password}
          type="password"
          placeholder="Password"
          onChange={e => setUser({...user, password: e.target.value})}
        />
        <Button disabled={user.login.length < 1 || user.password.length < 1}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
