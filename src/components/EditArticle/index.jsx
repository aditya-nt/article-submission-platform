import React, { useState , useEffect } from 'react'
import firebase from "../../firebase";
import UploadImage from '../UploadImage';

import Navigation from '../Navigation';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext"
import {
    useHistory
} from "react-router-dom";

export default function EditArticle(props) {
    const [file, setFile] = useState(null);

    const containerStyle = {
        marginTop: "70px"
    };

    const history = useHistory()
    const { currentUser, } = useAuth()

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("sss");
    const [url, setUrl] = useState("no Url");
    const [oldUrl, setOldUrl] = useState(null);

    const ref = firebase.firestore().collection('articles');


    useEffect(() => {
        // Run! Like go get some data from an API.
    
                ref
                .where('id', '==',props.match.params.id )
                .where('email', '==',currentUser.email)
                .onSnapshot((querySnapshot) => {
                    const items = [];
                    querySnapshot.forEach((doc) => {
                        items.push(doc.data().desc);
                        setTitle(doc.data().title);
                        setDesc(doc.data().desc);
                        setUrl(doc.data().imageUrl);
                        // document.getElementById("editTitle").value = doc.data().title
                        // document.getElementById("editDesc").value = doc.data().desc
                        // setFile(doc.data().imageUrl);
                        setOldUrl(doc.data().imageUrl);
                    });
                });

        },[]);


    function editSchool(newArticle) {
        ref.doc(props.match.params.id)
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

            <Navigation  buttonName="Publish" handleClick = {() => editSchool({ email : currentUser.email ,title, desc, id: props.match.params.id, imageUrl : (file)?url:oldUrl ,displayName :  currentUser.displayName })}/>
            

            <Row>
                <Col xl={12} lg={8} md={8} sm={8} xs={12}>
                <hr />
                EDIT ARTICLE
            <hr />

                <h4>TITLE</h4>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <h4>DESCRIPTION</h4>
                <textarea id="editDesc" value={desc} rows="8" cols="100" onChange={(e) => setDesc(e.target.value)}>
                </textarea>

                <br />
                {/* <button onClick={() => addSchool({ title : "title", desc : "desc", id: uuidv4() })}>Upload Image</button> */}
                <br />

                {/* <img src='../../' width="380px" height="480px"></img> */}
                {  !(file) && <img src={oldUrl}></img>}
                <br/>
                <br/>
 
                <UploadImage urlSetter={setUrl} file ={file} setFile = { setFile} />
                </Col>
                </Row>
        </Container >

    )
}
