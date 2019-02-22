import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import BlogForm from './components/BlogForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {

  render() {
    return (
        <Router>
          <div>
              <Route exact path="/"
                     render={() => <SignUpForm/>}/>
               <Route path="/blog-post"
                  render={() => <BlogForm/>}/>
          </div>
        </Router>
    );
  }
}

export default App;
