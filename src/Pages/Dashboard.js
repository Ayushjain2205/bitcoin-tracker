import React from "react";
import Navigator from "../Components/Navbar";
import { useUserAuth } from "../context/UserAuthContext";

function Dashboard() {
  const { user } = useUserAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h1>Welcome {user.email}</h1>}
    </div>
  );
}

export default Dashboard;
