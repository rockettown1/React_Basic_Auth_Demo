import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom";
import { useAuth } from "./utils/useAuth";
import PrivateStuff from "./components/PrivateStuff";
import Home from "./components/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  console.log("about to run auth with", user);
  useAuth(setIsAuthenticated, user);

  return (
    <BrowserRouter>
      <div>
        <h1>My React App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/private">Private Stuff</Link>
          </li>
        </ul>
        <Route exact path="/" render={() => <Home setUser={setUser} />} />
        <Route path="/private" render={() => (isAuthenticated ? <PrivateStuff user={user} /> : <Redirect to="/" />)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
