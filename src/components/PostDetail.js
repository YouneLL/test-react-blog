import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostCard from './PostCard';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { fetchComments } from '../actions';

class PostDetail extends React.Component {

  componentDidMount = async () => {
    this.props.fetchComments(this.props.id);
  }

  render() {
    const { id, title, body, comments } = this.props;
    return (
      <React.Fragment>
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
          <AddComment onSubmitComment={this.onSubmitComment} />
        </div>
      </React.Fragment>
    );
  }
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.array,
}

const mapStateToProps = (state) => ({
  comments: state.data.comments,
});

const mapDispatchToProps = {
  fetchComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
