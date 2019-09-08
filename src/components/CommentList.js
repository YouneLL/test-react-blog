import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types'
import Comment from './Comment';

const CommentList = (props) => {

  const { comments } = props;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col s10">
          <h5>Comments</h5>
        </div>
      </div>
      {
        comments.map(({ id, name, body }) =>
          <Comment key={id} name={name} body={body} date={faker.date.recent()} avatarUrl={faker.image.avatar()} />
        )
      }
    </React.Fragment>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
}

export default CommentList;
