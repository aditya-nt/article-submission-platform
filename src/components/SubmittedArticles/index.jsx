import React, { useState, useEffect } from 'react';
import firebase from "../../firebase"
import './styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";

import { Form, Button, Card, Alert, ListGroup, ListGroupItem } from "react-bootstrap"




export default function SubmittedArticles() {


    const containerStyle = {
        marginTop: "130px"
    };



    function handleHistory() {
        history.push("/write");
    }



    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory()



    const ref = firebase.firestore().collection('articles');

    //REALTIME GET FUNCTION
    function getSchools() {
        setLoading(true);
        ref
            //.where('owner', '==', currentUserId)
            //.where('title', '==', 'School1') // does not need index
            //.where('score', '<=', 10)    // needs index
            //.orderBy('owner', 'asc')
            //.limit(3)
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setSchools(items);
                setLoading(false);
            });
    }



    //DELETE FUNCTION
    function deleteSchool(school) {
        ref
        .doc(school.id)
        .delete()
        .catch((err) => {
            console.error(err);
        });
    }

    // // EDIT FUNCTION
    // function editSchool(school) {
    //     const updatedSchool = {
    //     score: +score,
    //     lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    //     };
    //     setLoading();
    //     ref
    //     .doc(school.id)
    //     .update(updatedSchool)
    //     .catch((err) => {
    //         console.error(err);
    //     });
    // }
    
    function editSchool(school) {
        
        history.push("/edit/"+school.id)

        // ref
        // .doc(school.id)
        // .update(updatedSchool)
        // .catch((err) => {
        //     console.error(err);
        // });
    }



    useEffect(() => {
        getSchools();
    }, []);



    return (

        <Container className="" style={containerStyle} >

            <Navigation buttonName="Write" handleClick={handleHistory} />

            <hr />
                YOUR SUBMITTED ARTICLES
            <hr />

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>

                    <ListGroup variant="flush" xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div>
                            {schools.map((school) => (
                                <div className="school" key={school.id}>
                                    <ListGroup.Item >

                                        <Row>
                                        <Col>
                                            <img src={school.imageUrl} class="img-fluid" alt="things" width="100px" height="100px" />

                                            </Col>

                                            <br />
                                            <Col xl={8} lg={12} md={12} sm={12} xs={12}>
                                                <h5><b>{school.title} </b></h5><br />
                                                {school.desc} <br />
                                                <b><i>{school.displayName}</i></b> <br />
                                            </Col>
                                            {/* <Col className="mr-auto"></Col>
                                            <Col className="mr-auto"></Col>
                                            <Col className="mr-auto"></Col> */}
                                            <Col>
                                            <Button className="m-1" variant="outline-secondary" onClick={() => editSchool(school)}>Edit</Button>
                                            <Button className="m-1" variant="outline-secondary"  onClick={() => deleteSchool(school)}>Delete</Button>
                                            </Col>

                                        </Row>
                                    </ListGroup.Item>

                                </div>


                            ))}
                        </div>
                    </ListGroup>


                </Col>
            </Row>
        </Container>
    )
}




{/* dddddddd */ }
{/* <hr />
                YOUR SUBMITTED ARTICLES
            <hr />


            <ul>
                <li>
                    <img src="" alt="" width="80px" height="80px" />
                    <h4>10 Interview Questions something</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    <br />
                    <b>edit icon , delete icon </b>
                    <hr />
                </li>
                <li>
                    <img src="" alt="" width="80px" height="80px" />
                    <h4>10 Interview Questions something</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    <br />
                    <b>edit icon , delete icon </b>
                    <hr />
                </li>
                <li>
                    <img src="" alt="" width="80px" height="80px" />
                    <h4>10 Interview Questions something</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    <br />
                    <b>edit icon , delete icon </b>
                    <hr />
                </li>
                <li>
                    <img src="" alt="" width="80px" height="80px" />
                    <h4>10 Interview Questions something</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    <br />
                    <b>edit icon , delete icon </b>
                    <hr />
                </li>
                <li>
                    <img src="" alt="" width="80px" height="80px" />
                    <h4>10 Interview Questions something</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    <br />
                    <b>edit icon , delete icon </b>
                    <hr />
                </li>


            </ul>


            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div> */}