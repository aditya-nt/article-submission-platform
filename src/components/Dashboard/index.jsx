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
import Posts from '../Posts';
import Pagination from '../Pagination';


export default function Dashboard(props) {

    const containerStyle = {
        marginTop: "120px"

    };

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const [schools, setSchools] = useState([]);


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
            .orderBy('date', 'desc')

            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setSchools(items);
                setPosts(items);
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

                        <div id="paginator">
                          

                            <Posts posts={currentPosts} loading={loading}  />
                            <br/>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={posts.length}
                                paginate={paginate}
                            />

                            <span>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            </span>
                        </div>
                    </ListGroup>
                    


                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={12} >

                    <TopArticles />

                </Col>
            </Row>
        </Container>
    )
}

