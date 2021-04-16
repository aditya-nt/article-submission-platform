import React from 'react';
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {
    useHistory
} from "react-router-dom";

const Posts = ({ posts, loading }) => {

    const history = useHistory()



  if (loading) {
    return <h2>Loading...</h2>;
  }


  function viewArticle(post) {
    history.push("/view/" + post.id)
    }


  return (
    <>
      {posts.map((posts) => (
                                <div className="posts" key={posts.id}>
                                    <ListGroup.Item >

                                        <Row>
                                            <Col>
                                                <img onClick={() => viewArticle(posts)} src={posts.imageUrl} className="img-fluid" alt="things" />

                                            </Col>

                                            <br />
                                            <Col xl={12} lg={12} md={12} sm={12} xs={12} onClick={() => viewArticle(posts)}>
                                                <hr />
                                                <h5><b>{posts.title} </b></h5>
                                                <span className="text">{posts.desc} </span>... <i>Read More</i><br />
                                                <i>By <b>{posts.displayName}</b></i> <br />
                                            </Col>


                                        </Row>
                                    </ListGroup.Item>

                                </div>


                            ))}
      </>
  );
};

export default Posts;
