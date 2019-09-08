import React from 'react';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
  const { name, body, date, avatarUrl } = props;
  return (
    <div className="row comment-row">
      <div className="col s10">
        <div className="comment-container">
          <div className="comment-avatar">
            <img src={avatarUrl} alt="" className="circle responsive-img"/>
          </div>
          <div className="card-panel comment-content hoverable">
            <div className="comment-content-info grey-text text-darken-1">
              <span className="comment-content-info-user">{ name }</span>
              <span className="comment-content-info-timeago">{ formatDistance(new Date(), date) }</span>
            </div>
            <p className="comment-content-text grey-text text-darken-4">{ body }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Comment.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  avatarUrl: PropTypes.string,
}

export default Comment;
