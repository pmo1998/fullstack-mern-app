import React, { Component } from "react";
import Input from './Input';
import axios from 'axios';

class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  onChange = (e) => {
       this.setState({ [e.target.name]: e.target.value });
     }

 onSubmit = (e) => {
     e.preventDefault();
     const { name, email } = this.state;
     axios.post('http://127.0.0.1:3001',{name:name,email:email})
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

  render() {
    const {name, email } = this.state;
    return (
      <div className="form-container">

            <form  className="sign-up-form" onSubmit={this.onSubmit}>

                <Input id="name"
                       name="name"
                       type="text"
                       placeholder="Name"
                       value={name}
                       onChange={this.onChange}/>

                <Input id="email"
                       name="email"
                       type="email"
                       placeholder="Email"
                       value={email}
                       onChange={this.onChange} />

                <button>Sign Up</button>

            </form>
      </div>
    );
  }

};

export default SignUpForm;
