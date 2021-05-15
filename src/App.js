import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Firstpage from './Firstpage';
import SecondPage from './SecondPage';



import './App.css';
import { GrAction } from "react-icons/gr";

//import { MdEdit } from "react-icons/md";








function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Firstpage}></Route>
        <Route path="/SecondPage" component={SecondPage}></Route>

      </Switch>
    </div>

  );
}




export default App;
