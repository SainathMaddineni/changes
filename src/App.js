/* eslint react/prop-types: 0 */

import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home1 from './components/home1';
import NewServices from './components/newServices';
import AboutUs from './components/about us';
import ContactUs from './components/contact us';
import MLogIn from './components/mlogin';
import Footer from './components/footer';
import SignUp1  from './components/signup1';
import ForgetPassword from './components/forgetpassword'
import Service from './components/service';
import IdleTimerContainer from './components/idleTimerContainer';
import CarrerControl from './components/carrercontrol';
import LoginIntro from './components/AfterLogin/LoginIntro';
import JOBS from './components/jobspage';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact strict component = {Home1}/>
      <Route path="/services" exact strict  component = {NewServices}/> 
      <Route path="/aboutus"  exact strict component = {AboutUs}/>
      <Route path="/contactus" exact strict  component = {ContactUs}/>
      <Route path="/login"   exact strict component = {MLogIn}/>
      <Route path="/signup"  exact strict  component = {SignUp1}/>
      <Route path="/forgetpassword"  exact strict  component = {ForgetPassword}/>
      <Route path="/service"  exact strict  component = {Service}/>
      <Route path="/carrercontrol"  exact strict  component = {CarrerControl}/>
      <Route path="/LoginIntro"  exact strict  component = {LoginIntro}/>
      <Route path="/jobs"  exact strict  component = {JOBS}/>
      </Switch>
      </Router>
      <Footer/>
      <IdleTimerContainer></IdleTimerContainer>
    </div>
  );
}

export default App;
