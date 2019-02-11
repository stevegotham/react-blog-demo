import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from '../../containers/Blog/FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/"
                // activeClassName="my-active" <=== optional to assign a specific class name (.active is default)
                // activeStyle={{ <=== override, inline-style
                //   color: '#fa923f'
                // }}
                exact>Home</NavLink></li>
              <li><NavLink
                to={{
                pathname: "/new-post",
                hash: '#submit',
                search: '?quick-link=true&loggedin=0'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
