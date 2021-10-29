import logo from './logo.svg';
import './App.css';
import React from "react"
import {Switch ,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import About from './components/MainPages/About';
import Feedback from './components/MainPages/Feedback';
import Summers from './components/Clothes/Summers';
import Winters from './components/Clothes/Winters';
import PartyWear from './components/Clothes/PartyWear';
import Casuals from './components/Clothes/Casuals';
import Form from './components/Login/Form';


const App = () =>{
  return(
    <React.Fragment>
      <Switch>
        <Route exact path = "/" component = {NavBar}/>
        <Route exact path = "/home" component = {NavBar}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/feedback" component = {Feedback}/>
        <Route exact path = "/summers" component = {Summers}/>
        <Route exact path = "/winters" component = {Winters}/>
        <Route exact path = "/partywear" component = {PartyWear}/>
        <Route exact path = "/casuals" component = {Casuals}/>
        <Route exact path = "/signup" component = {Form}/>
       
      </Switch>
    </React.Fragment>
  )
}
export default App
