import React, { useState } from 'react'
import { Navbar, Dropdown, Nav, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"


export default function Navigation(props) {



    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }



    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Link to="/"><Navbar.Brand href="#home"><b> FATMUG | </b>Greetings, {currentUser.displayName}</Navbar.Brand></Link>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" />

                <Button className="m-1" variant="outline-dark" onClick={props.handleClick}>{props.buttonName}</Button>
                <Link to="/your-articles">
                    <Button className="m-1" variant="dark" >Your Articles</Button></Link>
                <Button variant="outline-dark" onClick={handleLogout}>LogOut</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}
