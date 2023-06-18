import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://survey.fynzo.com/u/assets/websurvey/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fynzo
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}


export default Navigationbar