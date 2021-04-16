import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext"


import TopArticles from '../TopArticles'


export default function Dashboard(props) {

    const containerStyle = {
        marginTop: "100px"

    };


    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()


    function handleHistory() {
      history.push("/write");
    }
  


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
        <Container className="d-flex align-items-center justify-content-center" style={containerStyle} >

            <Navigation buttonName="Write" handleClick = {handleHistory}/>

            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={12}>

                    <ul>

                        <li>
                            <div >
                            <img  src="" alt="" width="480px" height="280px" />
                            </div>
                            <br />
                    icon <b>Eric Sangerma</b> in <b>Whileite</b>
                            <br />
                            <h1>10 Signs Someone</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <a><b>Read more . 7 min read >></b></a>
                        </li>

                        <li>
                            <img src="" alt="" width="480px" height="280px" />
                            <br />
                    icon <b>Eric Sangerma</b> in <b>Whileite</b>
                            <br />
                            <h1>10 Signs Someone</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <a><b>Read more . 7 min read >></b></a>
                        </li>
                        <li>
                            <img src="" alt="" width="480px" height="280px" />
                            <br />
                    icon <b>Eric Sangerma</b> in <b>Whileite</b>
                            <br />
                            <h1>10 Signs Someone</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <a><b>Read more . 7 min read >></b></a>
                        </li>
                        <li>
                            <img src="" alt="" width="480px" height="280px" />
                            <br />
                    icon <b>Eric Sangerma</b> in <b>Whileite</b>
                            <br />
                            <h1>10 Signs Someone</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <a><b>Read more . 7 min read >></b></a>
                        </li>
                        <li>
                            <img src="" alt="" width="480px" height="280px" />
                            <br />
                    icon <b>Eric Sangerma</b> in <b>Whileite</b>
                            <br />
                            <h1>10 Signs Someone</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <a><b>Read more . 7 min read >></b></a>
                        </li>


                    </ul>



                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a className ="active" href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>

                    <br />
                    <br />






                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12}>

                    <TopArticles />

                </Col>
            </Row>
        </Container>
    )
}

