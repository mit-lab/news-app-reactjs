import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';

// components
import SwitchLogic from './components/SwitchLogic';



function App() {
  return (
    <div className="App">
      <Router>
        <SwitchLogic />
      </Router>
    </div>
  );
}

export default App;
