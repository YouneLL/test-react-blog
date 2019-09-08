import React from 'react';
import PropTypes from 'prop-types';

const PostCardAction = (props) => {
  const { onPostDetailClick, postId } = props;
  return (
    <div className="card-action">
      <button className="waves-effect waves-light btn-small" onClick={onPostDetailClick(postId)}>
        Read more...
      </button>
    </div>
  );
}

PostCardAction.propTypes = {
  onPostDetailClick: PropTypes.func,
}

export default PostCardAction;
