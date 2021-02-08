import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

const Home = ({ user, setUser }) => {
  return (
    <div>
      <Signup setUser={setUser} />
      <Login setUser={setUser} />
      <Logout setUser={setUser} />
    </div>
  );
};

export default Home;
