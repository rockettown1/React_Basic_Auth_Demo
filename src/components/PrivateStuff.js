import React from "react";

const PrivateStuff = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  );
};

export default PrivateStuff;
