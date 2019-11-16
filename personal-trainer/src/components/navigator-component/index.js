import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigator = () => {
    return (
        <div>
            <Navbar className="nav-background" expand="md">
                <Navbar.Brand>
                    {" "}
                    <NavLink exact className="navbar-brand" to="/">
                        Personal Trainer
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/customers"
                        >
                            Customers
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/trainings"
                        >
                            Trainings
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigator;
