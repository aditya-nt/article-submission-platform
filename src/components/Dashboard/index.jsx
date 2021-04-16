import React, { useState, useEffect } from 'react'
import {
  useHistory
} from "react-router-dom";
import Navigation from '../Navigation';
import firebase from "../../firebase"

import { Container, Row, Col, ListGroup } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext"
import './dashstyles.css'


import TopArticles from '../TopArticles'


export default function Dashboard(props) {

    const containerStyle = {
        marginTop: "100px"

    };



    const [schools, setSchools] = useState([]);
    const [, setLoading] = useState(false);


    const [, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const ref = firebase.firestore().collection('articles');


    //REALTIME GET FUNCTION
    function getArticles() {
        setLoading(true);
        ref
            //.where('owner', '==', currentUserId)
            //.where('title', '==', 'School1') // does not need index
            //.where('score', '<=', 10)    // needs index
            //.orderBy('owner', 'asc')
            .limit(3)

            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setSchools(items);
                setLoading(false);
            });
    }


    useEffect(() => {
        getArticles();
    }, []);


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

    function viewArticle(school) {
        history.push("/view/" + school.id)
    }


    return (
        <Container className="d-flex align-items-center justify-content-center" style={containerStyle} >

            <Navigation buttonName="Write" handleClick={handleHistory} />

            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={12}>


                    <ListGroup variant="flush" xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div>
                            {schools.map((school) => (
                                <div className="school" key={school.id}>
                                    <ListGroup.Item >

                                        <Row>
                                            <Col>
                                                <img onClick={() => viewArticle(school)} src={school.imageUrl} className="img-fluid" alt="things" />

                                            </Col>

                                            <br />
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12} onClick={() => viewArticle(school)}>
                                                <hr />
                                                <h5><b>{school.title} </b></h5>
                                                <span className="text">{school.desc} </span>... <i>Read More</i><br />
                                                <i>By <b>{school.displayName}</b></i> <br />
                                            </Col>


                                        </Row>
                                    </ListGroup.Item>

                                </div>


                            ))}

                            <span>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            </span>
                        </div>
                    </ListGroup>
                    {/* <ul>

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
                    <br /> */}



                    {/* <SubmittedArticles /> */}



                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12}>

                    <TopArticles />

                </Col>
            </Row>
        </Container>
    )
}

