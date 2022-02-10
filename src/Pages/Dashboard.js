import React, { useState, useEffect } from "react";
import moment from "moment";
import { useUserAuth } from "../context/UserAuthContext";
import { latestPrice } from "../services/bitcoinService";

function Dashboard() {
  const { user } = useUserAuth();
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");

  useEffect(async () => {
    const price = await latestPrice();
    setPrice(price.price);

    // Calculte time
    var day = moment.unix(price.time);
    setTime(day.format("h:mm:ss a"));
  });

  return (
    <div>
      {user && <h1>Welcome {user.email}</h1>}
      {price && <h1>Current price {price}</h1>}
      {time && <h1>Last updated @{time} </h1>}
    </div>
  );
}

export default Dashboard;
