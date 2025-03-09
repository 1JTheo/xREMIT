//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PasswordReset from "./components/PasswordReset";
import EmailVerification from "./components/EmailVerification";
import PrivateRoute from "./components/PrivateRoute";
//import Dashboard from "./components/Dashboard"; // Assume you have a Dashboard component

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/password-reset" component={PasswordReset} />
          <Route path="/email-verification" component={EmailVerification} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
