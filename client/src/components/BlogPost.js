import React from "react";
import {styles} from './styles';
import {Container } from 'react-bootstrap';
import BlogForm from './BlogForm';
import BlogPostMethods from './BlogPostMethods';
import axios from 'axios';

class BlogPost  extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
           isEditing:false
        };
        this.props=props;
    }
    
    onClickEdit = () => {
        this.setState({isEditing:true});
    }
    
   onClickDelete=() => {
      axios
      .delete('http://127.0.0.1:3001/delele-blog-post', {
          data:
            {id:this.props.id}
      })
      .then(res => window.location = '/')
      .catch(err => alert(err));
      
    }
    
  render() {
    if(this.state.isEditing) {
         return (
            <BlogForm 
                       title={this.props.title} 
                       text={this.props.text}
                       for_='edit'
                       id={this.props.id}
                       btnName='Update'/>
        );
    }
    else {
        return (
        <Container  style={styles.BlogPost}>
            <article>
                <h3>{this.props.title}</h3> 
                <p>{this.props.text}</p>
            </article>
            <BlogPostMethods 
                    onClickEdit={this.onClickEdit.bind(this)}
                    onClickDelete={this.onClickDelete.bind(this)} />
        </Container>
    );
    }
  }
};
export default BlogPost;
