import React, { useState, useEffect } from 'react'
import firebase from "../../firebase";

import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";
import {
     useHistory
} from "react-router-dom";

import './newstyles.css'

export default function ViewArticle(props) {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("sss");
    const [url, setUrl] = useState("no Url");
    const [displayName, setDisplayName] = useState("no Url");

    const containerStyle = {
        marginTop: "70px"
    };

    const history = useHistory()
    const ref = firebase.firestore().collection('articles');


    function handleHistory() {
        history.push("/write");
    }

    useEffect(() => {
        // Run! Like go get some data from an API.

        ref
            .where('id', '==', props.match.params.id)
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data().desc);
                    setTitle(doc.data().title);
                    setDesc(doc.data().desc);
                    setUrl(doc.data().imageUrl);
                    setDisplayName(doc.data().displayName);
                    console.log(doc);
                });
            });

    }, []);



    return (
        <Container className="d-flex align-items-center justify-content-center" style={containerStyle} >

            <Navigation buttonName="Write" handleClick={handleHistory} />

            <Row>
                <Col xl={12} lg={8} md={8} sm={8} xs={12}>
                    <hr />
                    <i>By <b>{displayName}</b></i>
                    <hr />

                    <img src={url}></img><br /><br />
                    <h2>{title}</h2>
                    <hr />

                    <span className="space">
                        {desc}
                    </span>
                    <span className="space">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><hr />
                    </span>
                </Col>
            </Row>
        </Container >
    )
}
