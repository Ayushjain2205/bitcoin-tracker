import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Navigator from "../Components/Navbar";

function Login() {
  return (
    <div>
      <Navigator />
      <Container className='form-holder'>
        <Row style={{ width: "400px" }}>
          <Col>
            <div className='p-4 border'>
              <h2 className='mb-3'>Login!</h2>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='email' placeholder='Email address' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>

                <div className='d-grid gap-3'>
                  <Button variant='primary' type='submit'>
                    Login!
                  </Button>
                </div>
              </Form>
              <hr />

              <div className='mt-3'>
                <GoogleButton className='g-btn' />
              </div>
            </div>
            <div className='p-4 border mt-3 text-center'>
              Don't have an account? <Link to='/signup'>Sign up!</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
