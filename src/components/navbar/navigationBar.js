import React from "react";
import "./navigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navLink } from "../../assets/navLink";

function createLink() {
  return navLink.map((elem, idx) => {
    return (
      <Nav.Link key={idx} href={elem.ref}>
        {elem.name}
      </Nav.Link>
    );
  });
}

function navigationBar() {
  return (
    <div>
      <Navbar className="nav_container" expand="md">
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          Dmytro Boiko
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="link" style={{ margin: "0 1rem" }}>
            {createLink()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navigationBar;
