import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "./utils/useAuth";
import PrivateStuff from "./components/PrivateStuff";
import Home from "./components/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useAuth(setIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  return (
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
      <Route
        exact
        path="/"
        render={() => (
          <Home setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        )}
      />
      <Route path="/private" render={() => (isAuthenticated ? <PrivateStuff user={user} /> : <Redirect to="/" />)} />
    </div>
  );
};

export default App;
