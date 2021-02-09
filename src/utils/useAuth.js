import { useHistory } from "react-router-dom";

export const useAuth = async (setIsAuthenticated) => {
  const history = useHistory();
  const response = await fetch("http://localhost:5000/users/myprofile", {
    method: "GET",
    headers: { Authorization: `Bearer ${localStorage.getItem("dataToken")}` },
  });
  const data = await response.json();
  console.log(`${localStorage.getItem("dataToken")}`);
  console.log(data);
  if (response.status === 401) {
    setIsAuthenticated(false);
  } else {
    setIsAuthenticated(true);
    history.push("/private");
  }
};
