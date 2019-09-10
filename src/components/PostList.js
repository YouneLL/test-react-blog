import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import PostCardAction from './PostCardAction';
import { limitString } from '../services/helpers';

const PostList = (props) => {

  const { posts, onSelectPost } = props;
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h5>Posts</h5>
        </div>
      </div>
      <div className="row">
        {
          posts.map(({id, title, body}) => (
            <PostCard key={id} id={id} title={title} body={limitString(body)} box={'shrink'}>
              <PostCardAction onSelectPost={onSelectPost} postId={id} />
            </PostCard>
          ))
        }
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  onSelectPost: PropTypes.func,
}

export default PostList;
