import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import PostCardAction from './PostCardAction';
import {limitString} from '../services/helpers';

const PostList = (props) => {

  const { posts, onPostCardActionClick } = props;
  return posts.map(({id, title, body}) => (
    <PostCard key={id} id={id} title={title} body={limitString(body)} box={'shrink'}>
      <PostCardAction onClick={onPostCardActionClick} postId={id} />
    </PostCard>
  ));
}

PostList.propTypes = {
  posts: PropTypes.array,
  onPostCardActionClick: PropTypes.func,
}

export default PostList;
