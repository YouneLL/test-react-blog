import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types'
import Comment from './Comment';

const CommentList = (props) => {

  const { comments } = props;
  return comments.map(({ id, name, body }) =>
    <Comment key={id} name={name} body={body} date={faker.date.recent()} avatarUrl={faker.image.avatar()} />
  );
}

CommentList.proptypes = {
  comments: PropTypes.array,
}

export default CommentList;
