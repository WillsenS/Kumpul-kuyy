import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

export default function NavbarKuy() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Kumpul Kuy!</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/form-room">Create Meeting</Nav.Link>
                <Nav.Link href="/choose-date">Join Meeting</Nav.Link>
                <Nav.Link href="/order-room">Order Room</Nav.Link>
                <Nav.Link href="/create-room">Admin Create Room</Nav.Link>
            </Nav>

            <Nav className="ml-auto">
                <Nav.Link href="/">Sign Up</Nav.Link>
                <Nav.Link href="/create-meeting">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
}