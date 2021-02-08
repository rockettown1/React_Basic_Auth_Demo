import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";

const Home = ({ setUser }) => {
  return (
    <div>
      <Signup setUser={setUser} />
      {localStorage.getItem("dataToken") ? <Logout /> : <Login setUser={setUser} />}
    </div>
  );
};

export default Home;
