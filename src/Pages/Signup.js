import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigator from "../Components/Navbar";

function Signup() {
  return (
    <div>
      <Navigator />
      <Container className='form-holder'>
        <Row style={{ width: "400px" }}>
          <Col>
            <div className='p-4 border'>
              <h2 className='mb-3'>Sign up!</h2>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='email' placeholder='Email address' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>

                <div className='d-grid gap-3'>
                  <Button variant='primary' type='submit'>
                    Sign up!
                  </Button>
                </div>
              </Form>
            </div>

            <div className='p-4 border mt-3 text-center'>
              Already have an account? <Link to='/login'>Log In</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
