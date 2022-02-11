import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { latestPrice, lastTenPrices } from "../services/bitcoinService";
import Bitcoin from "../Components/Bitcoin";
import Chart from "../Components/Chart";

function Dashboard() {
  const { user } = useUserAuth();
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");

  const [graphPrices, setGraphPrices] = useState();
  const [graphTimes, setGraphTimes] = useState();

  useEffect(async () => {
    const price = await latestPrice();
    const last = await lastTenPrices();

    const prices = last.map((obj) => obj.price);
    const times = last.map((obj) => moment.unix(obj.time).format("h:mm"));

    setPrice(price.price);
    setGraphPrices(prices);
    setGraphTimes(times);

    // Calculte time
    var day = moment.unix(price.time);
    setTime(day.format("h:mm:ss a"));
  });

  return (
    <div>
      <Container>
        {user && <h6 className='welcome-message'>✨ Welcome {user.email}!</h6>}
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='component-holder'>
              {price && <Bitcoin price={price} time={time} />}

              {graphTimes && <Chart labels={graphTimes} prices={graphPrices} />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
