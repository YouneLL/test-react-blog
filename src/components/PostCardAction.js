import React from 'react';
import PropTypes from 'prop-types';

const PostCardAction = (props) => {
  const { onClick, postId } = props;
  return (
    <div className="card-action">
      <button className="waves-effect waves-light btn-small" onClick={onClick(postId)}>
        Read more...
      </button>
    </div>
  );
}

PostCardAction.propTypes = {
  onDisplayPostClick: PropTypes.func,
}

export default PostCardAction;
