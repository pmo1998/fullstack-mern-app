import React, { Component } from "react";
import Input from './Input';
import axios from 'axios';
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
      axios.post('http://127.0.0.1:3001/blog-post',{title:title,text:text})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  render() {
    return (
        <div className="blog-form-container">
          <form  className="blog-form" onSubmit={this.onSubmit}>

              <Input
                     name="title"
                     type="text"
                     placeholder="Enter a title"
                     setValues={this.setValues.bind(this)}
                     />

              <Input
                     name="text"
                     type="text"
                     placeholder="Enter a text"
                     setValues={this.setValues.bind(this)}
                   />

                 <button>Post</button>

          </form>
        </div>
    );
  }
};


export default BlogForm;
