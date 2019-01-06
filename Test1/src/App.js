import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router';
import Appdesign from './pages/Appdesign';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Appdesign/>
      </div>



    );
  }
}

export default App;
