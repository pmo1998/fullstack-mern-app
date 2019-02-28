import React from 'react';
import {styles} from './styles';

const BlogPost=(props)=> {
    return (
        <article style={styles.BlogPost}>
            <h3>{props.title}</h3> 
            <p>{props.text}</p>
        </article>
    );
};

export default BlogPost;