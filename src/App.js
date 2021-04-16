import './App.css';
import CreateArticle from './components/CreateArticle';
import SubmittedArticles from './components/SubmittedArticles';
import React from "react";

import { AuthProvider } from "./contexts/AuthContext"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./components/Login/Signup"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/Login/PrivateRoute"
import ForgotPassword from "./components/Login/ForgotPassword"
import UpdateProfile from "./components/Login/UpdateProfile"
import EditArticle from './components/EditArticle';
import ViewArticle from './components/ViewArticle';

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
              <Route path="/write" component={CreateArticle} />
              <Route path="/edit/:id" component={EditArticle} />
              <Route path="/view/:id" component={ViewArticle} />
              <Route path="/your-articles" component={SubmittedArticles} />
      


            </Switch>
          </AuthProvider>
        </Router>
        </React.Fragment>
    
  )
}

export default App
