import React, { useContext } from "react";
import { Context } from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navigation.Brand href="#home">Navbar</Navigation.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;