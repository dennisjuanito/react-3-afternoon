import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/api/posts`)
         .then((res) => {
           this.setState({posts: res.data});
         })
         .catch('errror');
  }

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;
    let renderPost = posts.map((element, i) => {
      return (
        <Post key={element.id} />
      );
    });

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {renderPost}
        </section>
      </div>
    );
    
  }
}

export default App;
