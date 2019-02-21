import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {



  render() {
    return (
        <Router>
              <Route exact path="/"
                     render={(props) => <SignUpForm {...props} />}/>
        </Router>
    );
  }
}

export default App;
