import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  
  state = {
    posts: [],
    selectedPostId: null,
    success: false
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
  
  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id
    });
  }
  
  deletePostHandler = (id) => {
    let updatedPosts = [...this.state.posts];
    const removeIndex = updatedPosts.map(post => {
      return post.id;
    }).indexOf(id);
    updatedPosts.splice(removeIndex, 1);
    this.setState({
      posts: updatedPosts,
      selectedPostId: null
    })
  }
  
  render () {
    
    let posts = "Something went wrong!";
    if (this.state.success) {
      posts = this.state.posts
        .map(post => (
          <Post 
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        ));
    }
      
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost
            state={this.state}
            posts={this.state.posts}
            id={this.state.selectedPostId}
            clicked={() => this.deletePostHandler(this.state.selectedPostId)} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
