import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from './components/Home';

import CounterRedux from './components/CounterRedux';
import NavBar from './components/NavBar';
import EmployeeRedux from './components/EmployeeRedux';
import UserReducer from './components/UserReducer';
let App=()=>{
return(
    <React.Fragment>
      
      <Router>
     
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/employee'} element={<EmployeeRedux/>}></Route>
        <Route path={'/counter'} element={<CounterRedux/>}></Route>
        <Route path={'/userdata'} element={<UserReducer />}></Route>
        

       
      </Routes>
      </Router>

      
    </React.Fragment>
  )
}

export default App;
