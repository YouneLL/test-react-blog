import React from 'react';
import PropTypes from 'prop-types';

const PostCardAction = (props) => {
  const { onSelectPost, postId } = props;
  return (
    <div className="card-action">
      <button className="waves-effect waves-light btn-small" onClick={onSelectPost(postId)}>
        Read more...
      </button>
    </div>
  );
}

PostCardAction.propTypes = {
  onSelectPost: PropTypes.func,
}

export default PostCardAction;
