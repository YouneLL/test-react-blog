import React from 'react';
import PropTypes from 'prop-types';
import jsonPlaceholder from '../api/jsonPlaceholder';
import PostCard from './PostCard';
import CommentList from './CommentList';

class PostDetail extends React.Component {

  state = { comments: [] };

  componentDidMount = async () => {
    const { id } = this.props;
    const response = await jsonPlaceholder.get('/comments', { params: { postId: id } });
    this.setState({ comments: response.data });
  }

  render() {
    const { id, title, body } = this.props;
    const { comments } = this.state;
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h5>Post Detail</h5>
          </div>
        </div>
        <div className="row">
          <PostCard id={id} title={title} body={body} />
        </div>
        <CommentList comments={comments} />
      </div>
    );
  }
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default PostDetail;
