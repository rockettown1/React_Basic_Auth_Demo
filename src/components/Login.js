import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser, setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const formHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.user);
    localStorage.setItem("dataToken", data.token);
    history.push("/private");
    setIsAuthenticated(true);
  };
  return (
    <form onSubmit={formHandler}>
      <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
      <input type="text" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
      <button>Login</button>
    </form>
  );
};

export default Login;
