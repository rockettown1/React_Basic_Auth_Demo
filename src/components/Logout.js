import React from "react";
import { useHistory } from "react-router-dom";

const Logout = ({ setUser, setIsAuthenticated }) => {
  const history = useHistory();
  const logout = async (event) => {
    event.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/logout`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("dataToken")}` },
    });
    const data = await response.json();
    console.log(data);
    setUser({});
    localStorage.removeItem("dataToken");
    setIsAuthenticated(false);
    history.push("/");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
