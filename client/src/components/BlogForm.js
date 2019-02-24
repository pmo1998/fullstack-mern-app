import React, { Component } from "react";
import Input from './Input';
import axios from 'axios';
import {Form,Button } from 'react-bootstrap';
import {styles} from './styles';

class BlogForm extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      text: '',
    };
  }

  setValues=(name,value)=>{
     this.setState({[name]:value});
  }

  onSubmit = (e) => {
      e.preventDefault();
      const { title, text } = this.state;
      axios
      .post('http://127.0.0.1:3001/blog-post',{title:title,text:text})
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data));
    }

  render() {
    return (  
        <Form onSubmit={this.onSubmit} style={styles.Form}>
            <Input
                  as='input'
                  name='name'
                  type='text'
                  placeholder='Enter a title'
                  setValues={this.setValues.bind(this)}/>

            <Input
                 as='textarea'
                 rows='6'
                 name='text'
                 type='text'
                 placeholder='Enter a title'
                 setValues={this.setValues.bind(this)}/>
                 
            <Button 
                 style={styles.Button}
                 variant='dark'
                 type='submit'>Post</Button>
       </Form>
    );
  }
};


export default BlogForm;
