import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import BlogForm from './components/BlogForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container,Row,Col } from 'react-bootstrap';

class App extends Component {


  render() {
    return (
        <Router>
          <Container style={{marginTop:'50px'}}>
          <Row>
            <Col></Col>
            <Col>
              <Route exact path='/'
                     render={() => <SignUpForm/>}/>
               <Route path='/blog-post'
                  render={() => <BlogForm/>}/>
            </Col>
            <Col></Col> 
            </Row>
          </Container>
        </Router>
    );
  }
}

export default App;
