import React, { useState, useEffect } from "react";
import moment from "moment";
import { useUserAuth } from "../context/UserAuthContext";
import { latestPrice } from "../services/bitcoinService";
import Bitcoin from "../Components/Bitcoin";

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
      {user && <h6>Welcome {user.email}</h6>}
      {price && <Bitcoin price={price} time={time} />}
    </div>
  );
}

export default Dashboard;
