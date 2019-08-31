import React from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';
import PostCard from './PostCard';
import {limitString} from '../services/helpers';

class PostList extends React.Component {

  state = { posts: [] };

  componentDidMount = async () => {
    const response = await jsonPlaceholder.get('/posts');
    this.setState({ posts: response.data });
  }

  renderPosts = () => {
    return this.state.posts.map(({id, title, body}) => (
      <PostCard id={id} title={title} body={limitString(body)} />
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default PostList;
