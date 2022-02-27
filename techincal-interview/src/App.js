
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Specialist from './components/Specialist';
import Projects from './components/Projects';
import ProjectShow from './components/ProjectShow';
import './App.css';

function App() {
  return(
    <Router>
      <div>
        <Route exact path='/' component={Login}/>
        <PrivateRoute 
        path='/dashboard' 
        component={Dashboard}/>
        <PrivateRoute 
        path='/Profile' 
        component={Profile}/>
        <PrivateRoute 
        path='/Specialist' 
        component={Specialist}/>
        <PrivateRoute 
        path='/Projects' 
        component={Projects}/>
        <PrivateRoute 
        path='/ProjectShow' 
        component={ProjectShow}/>
        
      </div>
    </Router>
  )
}

export default App;