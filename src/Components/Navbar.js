import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Navigator() {
  let location = useLocation();
  const ignorePaths = ["/login", "/signup"];

  console.log(location.pathname);
  if (!ignorePaths.includes(location.pathname)) {
    return (
      <div>
        <Navbar bg='light' variant='light' expand='lg' sticky='top'>
          <Navbar.Brand href='#home'>
            <Nav.Link href='/'>Bitcoin</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className='d-flex ' id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  return null;
}

export default Navigator;
