import React from 'react';
import PropTypes from 'prop-types';
import jsonPlaceholder from '../api/jsonPlaceholder';
import PostCard from './PostCard';
import PostCardAction from './PostCardAction';
import {limitString} from '../services/helpers';

class PostList extends React.Component {

  state = { posts: [] };

  componentDidMount = async () => {
    const response = await jsonPlaceholder.get('/posts');
    this.setState({ posts: response.data });
  }

  handleDisplayPostClick = (postId) => (e) => {
    const { handleDisplayPostClick } = this.props;
    // find post by postId
    const post = this.state.posts.find(post => post.id === postId);
    handleDisplayPostClick(post);
  }

  render() {
    return this.state.posts.map(({id, title, body}) => (
      <PostCard key={id} id={id} title={title} body={limitString(body)} box={'shrink'}>
        <PostCardAction onClick={this.handleDisplayPostClick} postId={id} />
      </PostCard>
    ));
  }
}

PostList.propTypes = {
  onDisplayPostClick: PropTypes.func,
}

export default PostList;
