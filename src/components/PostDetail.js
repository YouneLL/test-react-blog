import React from 'react';
import PropTypes from 'prop-types';
import jsonPlaceholder from '../api/jsonPlaceholder';
import PostCard from './PostCard';
import CommentList from './CommentList';

class PostDetail extends React.Component {

  state = { comments: [] };

  componentDidMount = async () => {
    const { id } = this.props;
    console.log(id);
    const response = await jsonPlaceholder.get('/comments', { params: { postId: id } });
    this.setState({ comments: response.data });
  }

  render() {
    const { id, title, body } = this.props;
    const { comments } = this.state;
    return (
      <React.Fragment>
        <PostCard id={id} title={title} body={body} />
        <CommentList comments={comments} />
      </React.Fragment>

    );
  }
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default PostDetail;
