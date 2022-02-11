import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function LandingPage() {
  return (
    <div className='landing-page'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='banner-holder'>
              <h1 className='landing-banner'>Get latest bitcoin price!</h1>
              <img
                className='banner-image'
                src='https://i.postimg.cc/MG5ZJdNn/undraw-bitcoin2-ave7.png'
                alt=''
                srcset=''
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
