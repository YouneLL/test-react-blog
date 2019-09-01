import React from 'react';
import PropTypes from 'prop-types';

const PostCard = (props) => {
  const { id, title, body, expend } = props;
  const expendClass = expend ? '' : 'm6 l4';
  return (
    <div className={`col s12 ${expendClass}`}>
      <div className="card">
        <div className="card-image">
          <img alt="post" src={`https://source.unsplash.com/random/800x${expend ? 300 : 600 }/?sig=${id}`} />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{body}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  expend: PropTypes.bool,
}

export default PostCard;
