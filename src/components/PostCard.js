import React from 'react';
import PropTypes from 'prop-types';

const configuration = {
  grow: { height: 300, class: '' },
  shrink: { height: 600, class: 'm6 l4'}
}

const PostCard = (props) => {
  const { id, title, body, box } = props;
  return (
    <div className={`col s12 ${configuration[box].class}`}>
      <div className="card">
        <div className="card-image">
          <img alt="post" src={`https://source.unsplash.com/random/800x${configuration[box].height}/?sig=${id}`} />
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

PostCard.defaultProps = {
  box: 'grow',
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  box: PropTypes.string,
}

export default PostCard;
