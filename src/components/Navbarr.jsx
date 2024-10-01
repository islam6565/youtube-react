import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbarr = () => {
  return (
    <Navbar expand="lg" className="c2">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
        style={{width:"150px"}}
        
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Form className="d-flex"
          style={{marginLeft:"300px"}} >
          
            <Form.Control

              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                width:"400px",

              }}

             
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr