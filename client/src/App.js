import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import BlogForm from './components/BlogForm';
import AllBlogPosts from './components/AllBlogPosts';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container,Row,Col } from 'react-bootstrap';

class App extends Component {


  render() {
    return (
        <Router>
          <Container style={{marginTop:'50px'}}>
          <Row>
            <Col sm='2'></Col>
            <Col sm='8'>
              <Route exact path='/'
                     render={() => <SignUpForm/>}/>
               <Route path='/blog-post'
                  render={() => <BlogForm/>}/>
               <Route path='/blog-posts'
                  render={() => <AllBlogPosts/>}/>
            </Col>
            <Col sm='2'></Col> 
            </Row>
          </Container>
        </Router>
    );
  }
}

export default App;
