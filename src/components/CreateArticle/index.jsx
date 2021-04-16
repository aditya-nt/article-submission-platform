import React, { useState } from 'react'
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import UploadImage from '../UploadImage';

import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";

export default function CreateArticle() {
    const [file, setFile] = useState(null);

    const containerStyle = {
        marginTop: "70px"
    };

    const { currentUser, } = useAuth()
    const history = useHistory()

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("no Url");


    const ref = firebase.firestore().collection("articles");


    function addSchool(newArticle) {
        ref.doc(newArticle.id)
            .set(newArticle).then(
                () => {
                    setTitle("")
                    setDesc("")
                    setUrl("no Url")
                    setFile(null)
                    history.push("/your-articles")
                }
            )
            .catch((err) => {
                console.error(err);
            });
    }


    return (
        <Container className="d-flex align-items-center justify-content-center" style={containerStyle} >

            <Navigation buttonName="Publish" handleClick={() => addSchool({ email: currentUser.email, title, desc, id: uuidv4(), imageUrl: url, displayName: currentUser.displayName })} />


            <Row>
                
                <Col xl={12} lg={8} md={8} sm={8} xs={12}>
                <hr />
                CREATE ARTICLE
                <hr />
                    <h4>TITLE</h4>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <h4>DESCRIPTION</h4>
                    <textarea value={desc} rows="8" cols="100" onChange={(e) => setDesc(e.target.value)}>
                    </textarea>

                    <br />
                    {/* <button onClick={() => addSchool({ title : "title", desc : "desc", id: uuidv4() })}>Upload Image</button> */}
                    <br />

                    {/* <img src='../../' width="380px" height="480px"></img> */}
                    <UploadImage urlSetter={setUrl} file={file} setFile={setFile} />
                </Col>
            </Row>
        </Container >

    )
}
