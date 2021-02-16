import React, { useState } from "react";

const Signup = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const formHandler = async (event) => {
    event.preventDefault();
    console.log(process.env.REACT_APP_API_URL);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: pass,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.savedUser);
    localStorage.setItem("dataToken", data.token);
  };

  return (
    <form onSubmit={formHandler}>
      <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
      <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
      <input type="text" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
