import React from 'react';
import './style.scss';
import Dashboard from './Components/Dashboard';
import Home from './Components/Login_Logout/Home';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const {user, isAuthenticated} = useAuth0();
  console.log(user)
  return (
    <div>
    <Home/>
      {/* <Dashboard/> */}
    </div>
  )
}

export default App
