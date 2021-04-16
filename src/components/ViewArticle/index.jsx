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
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                    </span>


                    {/* <h4>TITLE</h4>
            <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <h4>DESCRIPTION</h4>
            <textarea id="editDesc" value={desc} rows="8" cols="100" onChange={(e) => setDesc(e.target.value)}>
            </textarea>

            <br />
            {/* <button onClick={() => addSchool({ title : "title", desc : "desc", id: uuidv4() })}>Upload Image</button> */}
                    <br />

                    {/* <img src='../../' width="380px" height="480px"></img> */}

                </Col>
            </Row>
        </Container >



        // <div>

        //         <img src='../../' width="380px" height="180px"></img>

        //         <br/>
        //         <h1>10 Questions something</h1>
        //         <i>Jul 10,<b>6 min read</b></i>star
        //         <hr/>

        //         <p>

        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        //         </p>

        //         icon <i>by </i><b>Eric Sigma</b>

        //     </div>
    )
}
