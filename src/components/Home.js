import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

const Home = ({ setUser, setIsAuthenticated, isAuthenticated }) => {
  return (
    <div>
      <Signup setUser={setUser} />
      {!isAuthenticated ? (
        <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Logout setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
};

export default Home;
