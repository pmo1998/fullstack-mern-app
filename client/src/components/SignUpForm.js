import React, { Component } from "react";
import Input from './Input';
import axios from 'axios';

import { Redirect } from 'react-router';

class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      redirect:false,
    };
  }

 setValues=(name,value)=>{
    this.setState({[name]:value});
 }

 onSubmit = (e) => {
     e.preventDefault();
     const { name, email } = this.state;
     axios.post('http://127.0.0.1:3001',{name:name,email:email})
       .then(res => {
         if(res.data.redirectUrl.length) this.setState({redirect:true});
       })
       .catch(err => console.log(err))
   }

  render() {
    if(this.state.redirect===true) {
      return <Redirect to='/blog-post'/>
    }
    return (
      <div className="sign-up-form-container">

            <form  className="sign-up-form" onSubmit={this.onSubmit}>

                <Input
                       name="name"
                       type="text"
                       placeholder="Enter a name"
                       setValues={this.setValues.bind(this)}
                       />

                <Input
                       name="email"
                       type="email"
                       placeholder="Enter an email"
                       setValues={this.setValues.bind(this)}
                     />

                <button>Sign Up</button>

            </form>
      </div>
    );
  }

};

export default SignUpForm;
