import React, { useState, useEffect } from 'react'
import {
    useHistory
} from "react-router-dom";
import firebase from "../../firebase"

import {  Row, Col, ListGroup } from "react-bootstrap";

import './topstyles.css'



export default function TopArticles() {



    const [schools, setSchools] = useState([]);
    const [, setLoading] = useState(false);
   

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
            .limit(5)

            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setSchools(items);
                setLoading(false);
            });
    }


    function viewArticle(school){
        history.push("/view/"+school.id)
    }



    useEffect(() => {
        getSchools();
    }, []);



    return (
        <div>
            <hr/>
            TOP ARTICLES
            <hr/>

            <ListGroup variant="flush" xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div>
                            {schools.map((school) => (
                                <div className="school" key={school.id}>
                                    <ListGroup.Item >

                                        <Row>
                                        <Col>
                                            <img onClick={() => viewArticle(school)} src={school.imageUrl} className="img-fluid" alt="things" width="100px" height="100px" />

                                            </Col>

                                            <br />
                                            <Col xl={8} lg={12} md={12} sm={12} xs={12} onClick={() => viewArticle(school)}>
                                                <h6><b>{school.title} </b></h6>
                                                {/* <span className="text">{school.desc} </span> */}
                                                <i>Read More...</i><br />
                                                <i>By <b>{school.displayName}</b></i> <br />

                                            </Col>
                                     
                                        </Row>
                                    </ListGroup.Item>

                                </div>


                            ))}

                            <span>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            </span>
                        </div>
                    </ListGroup>
            {/* <ul>
                <li>
                    <u>icon</u> <b>Michelle Hamburger</b> in <b>Better Programming </b>
                    <br/>
                    <h2>10 Questions something</h2>
                    <img src="" alt="" placeholder="text" width="40px" height="40px"/>
                    <br/>
                    <b>Jun 10 . 6 min read</b> star 
                </li>
                <li>
                    <u>icon</u> <b>Michelle Hamburger</b> in <b>Better Programming </b>
                    <br/>
                    <h2>10 Questions something</h2>
                    <img src="" alt="" placeholder="text" width="40px" height="40px"/>
                    <br/>
                    <b>Jun 10 . 6 min read</b> star 
                </li>
                <li>
                    <u>icon</u> <b>Michelle Hamburger</b> in <b>Better Programming </b>
                    <br/>
                    <h2>10 Questions something</h2>
                    <img src="" alt="" placeholder="text" width="40px" height="40px"/>
                    <br/>
                    <b>Jun 10 . 6 min read</b> star 
                </li>
                <li>
                    <u>icon</u> <b>Michelle Hamburger</b> in <b>Better Programming </b>
                    <br/>
                    <h2>10 Questions something</h2>
                    <img src="" alt="" placeholder="text" width="40px" height="40px"/>
                    <br/>
                    <b>Jun 10 . 6 min read</b> star 
                </li>
            </ul> */}
        </div>
    )
}
