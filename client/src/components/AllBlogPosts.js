import React, { Component } from "react";
import BlogPost from './BlogPost';
import axios from 'axios';

class AllBlogPosts  extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            errors:null
        };
    }
     componentDidMount(){
      axios
      .get('http://127.0.0.1:3001/get-blog-posts')
      .then(res => this.setState({posts:res.data.posts}))
      .catch(err => this.setState({errors:err.data.error}));
     }
    
    render() {
      if(this.state.posts.length===0) {
           let message='There\'s no posts';
           return (<section>{message}</section>);
        }
      else if(this.state.errors) {
         let message='Something unexpected happend.';
         return (
             <section>{message}</section>);    
      }
      else return (
          <section>
              {this.state.posts.map(post=><BlogPost key= {post._id} title={post.title} text={post.text}/>)}
          </section>
      );}
    
};

export default AllBlogPosts;