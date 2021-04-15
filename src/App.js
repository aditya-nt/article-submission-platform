import logo from './logo.svg';
import './App.css';
import CreateEditArticle from './components/CreateEditArticle';
import ViewArticle from './components/ViewArticle';
import SubmittedArticles from './components/SubmittedArticles';
import React, { useState } from "react";

import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./components/Login/Signup"
import Dashboard from "./components/Dashboard"
import Navigation from './components/Navigation'
// import Dashboard from "./components/Login/Dashboard"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/Login/PrivateRoute"
import ForgotPassword from "./components/Login/ForgotPassword"
import UpdateProfile from "./components/Login/UpdateProfile"

function App(props) {


  return (

    <React.Fragment>
  
    
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/write" component={CreateEditArticle} />
              <Route path="/your-articles" component={SubmittedArticles} />
      


            </Switch>
          </AuthProvider>
        </Router>
        </React.Fragment>
    
  )
}

export default App
