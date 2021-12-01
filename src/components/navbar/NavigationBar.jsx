import React from "react";
import "./navigationBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navLink } from "../../assets/navLink";
import { Link } from "react-router-dom";

function createLink() {
  return navLink.map((elem, idx) => {
    return (
      <Nav.Link key={idx} as={Link} to={elem.ref} eventKey={idx}>
        {elem.name}
      </Nav.Link>
    );
  });
}

export default function NavigationBar() {
  return (
    <div>
      <Navbar
        className="nav_container"
        expand="md"
        style={{ zIndex: "2", position: "fixed", top: "0", width: "100%" }}
        collapseOnSelect
      >
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Dmytro Boiko
          </Link>
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
