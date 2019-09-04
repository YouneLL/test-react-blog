import React from 'react';
import faker from 'faker';
import { formatDistance } from 'date-fns'
import './Comment.css';

const Comment = () => {
  return (
    <div className="row comment-row">
      <div className="col offset-s1 s10">
        <div className="comment-container">
          <div className="comment-avatar">
            <img src={faker.image.avatar()} alt="" className="circle responsive-img"/>
          </div>
          <div className="card-panel comment-content hoverable">
            <div className="comment-content-info grey-text text-darken-1">
              <span className="comment-content-info-user">Jhon bar</span>
              <span className="comment-content-info-timeago">{ formatDistance(new Date(), new Date('2019-09-03T10:20:30Z')) }</span>
            </div>
            <p className="comment-content-text grey-text text-darken-4">I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;
