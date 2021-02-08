import React from "react";

const Logout = ({ setUser }) => {
  const logout = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/users/logout", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("dataToken")}` },
    });
    const data = await response.json();
    console.log(data);
    setUser({});
    localStorage.removeItem("dataToken");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
