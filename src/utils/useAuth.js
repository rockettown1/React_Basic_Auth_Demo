import React from "react";

export const useAuth = async (setIsAuthenticated) => {
  const response = await fetch("http://localhost:5000/users/myprofile", {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.getItem("dataToken")}` },
  });
  if (response.status === 401) {
    setIsAuthenticated(false);
  } else {
    setIsAuthenticated(true);
  }
};
