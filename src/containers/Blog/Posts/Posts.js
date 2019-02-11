import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
  
  state = {
    posts: [],
    selectedPostId: null,
    success: false
  }
  
  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    });
  }
  
  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Snoop Dogg'
          }
        });
        this.setState({
          posts: updatedPosts,
          success: true
        });
      }, error => {
        console.log('shit: ', error);
      });
  }
    
  render() {
    
    let posts = "Searching the Universe for exciting posts...";
    if (this.state.success) {
      posts = this.state.posts.map(post => (
          <Link to={'/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />
          </Link>
        ));
    }
    
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;
