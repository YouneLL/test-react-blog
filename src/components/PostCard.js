import React from 'react';
import PropTypes from 'prop-types';

const PostCard = (props) => {
  const { id, title, content } = props
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img alt="post" src={`https://source.unsplash.com/random/800x600/?sig=${id}`} />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{content}</p>
        </div>
        <div className="card-action">
          <button className="waves-effect waves-light btn-small">Read more...</button>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
}

export default PostCard;
