import React, { useState } from 'react'
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import UploadImage from '../UploadImage';

import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"


export default function CreateEditArticle() {
    const [file, setFile] = useState(null);

    const containerStyle = {
        marginTop: "70px"
    };

    const { currentUser,  } = useAuth()


   
    // const [schools, setSchools] = useState([]);
    // const [loading, setLoading] = useState(false);
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
                }
            )
            .catch((err) => {
                console.error(err);
            });
    }


    return (
        <Container className="d-flex align-items-center justify-content-center" style={containerStyle} >

            <Navigation  buttonName="Publish" handleClick = {() => addSchool({ email : currentUser.email ,title, desc, id: uuidv4(), imageUrl : url ,displayName :  currentUser.displayName })}/>


            <Row>
                <Col xl={8} lg={8} md={8} sm={8} xs={12}>

                <h4>TITLE</h4>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <h4>DESCRIPTION</h4>
                <textarea value={desc} name="w3review" rows="4" cols="50" onChange={(e) => setDesc(e.target.value)}>
                </textarea>

                <br />
                {/* <button onClick={() => addSchool({ title : "title", desc : "desc", id: uuidv4() })}>Upload Image</button> */}
                <br />

                {/* <img src='../../' width="380px" height="480px"></img> */}
                <UploadImage urlSetter={setUrl} file ={file} setFile = { setFile} />
                </Col>
                </Row>
        </Container >

    )
}
