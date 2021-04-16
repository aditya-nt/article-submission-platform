import React, { useState } from 'react'
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import UploadImage from '../UploadImage';

import date from 'date-and-time';

import Navigation from '../Navigation';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"

import {
    useHistory
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

    const now = new Date();
    date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
    date.format(now, 'ddd, MMM DD YYYY');       // => 'Fri, Jan 02 2015'
    date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 PM GMT-0800'
    date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 AM GMT+0000'

    const pattern = date.compile('YYYYMMDDHHmmssS');
    // date.format(now, pattern);


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

            <Navigation buttonName="Publish" handleClick={() => addSchool({ email: currentUser.email, title, desc, id: uuidv4(), imageUrl: url, displayName: currentUser.displayName ,date : date.format(now, pattern) })} />


            <Row>

                <Col xl={12} lg={8} md={8} sm={8} xs={12}>
                    <hr />
                CREATE ARTICLE
                <hr />
                    
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><h4>TITLE</h4></Form.Label>
                            <Form.Control value={title}  type="text"  onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h4>DESCRIPTION</h4></Form.Label>
                            <Form.Control value={desc} as="textarea" rows={8} cols={100} onChange={(e) => setDesc(e.target.value)}/>
                        </Form.Group>
                    </Form>
                  
                    <UploadImage urlSetter={setUrl} file={file} setFile={setFile} />
                </Col>
            </Row>
        </Container >

    )
}
