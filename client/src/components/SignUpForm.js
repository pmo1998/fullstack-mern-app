import React, { Component } from "react";
import Input from './Input';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Form,Button } from 'react-bootstrap';
import {styles} from './styles';

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
     axios
     .post('http://127.0.0.1:3001',{name:name,email:email})
     .then(res => {
         console.log(res);
         if(res.data.redirectUrl.length) this.setState({redirect:true});
       })
     .catch(err => console.log(err.response.data));
   }

  render() {
    if(this.state.redirect===true) {
      return <Redirect to='/blog-post'/>
    }
    return (
       
        <Form onSubmit={this.onSubmit} style={styles.Form}>   
            <Input 
                   as='input'
                   name='name'
                   type='text'
                   placeholder='Enter a name'
                   setValues={this.setValues.bind(this)}/>

            <Input
                   as='input'
                   name='name'
                   type='text'
                   placeholder='Enter an email'
                   setValues={this.setValues.bind(this)}
                 />
            <Button 
                   style={styles.Button}
                   variant='dark'
                   type='submit'>Sign Up</Button>
       </Form>

    );
  }

};

export default SignUpForm;
