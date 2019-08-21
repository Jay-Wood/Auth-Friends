import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import FriendsList from "../src/FriendsList";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
          <h1>COMIN' APPPPPPPP YA!</h1>
          <span>
            <Link to="/login">Login</Link>
          </span>
          <div>
            <Link to="/protected">Secret Friends List</Link>
          </div>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
