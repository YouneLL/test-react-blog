import React from 'react';
import { connect } from 'react-redux';

import PostList from './PostList';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import { fetchPosts, selectPost, addPost }  from '../actions';

class App extends React.Component {

  componentDidMount = async () => {
    this.props.fetchPosts();
  }

  onSelectPost = (postId) => (e) => {
    this.props.selectPost(postId);
  }

  onSubmitPost = (post, done) => async (e) => {
    e.preventDefault();
    // add new post
    this.props.addPost({ ...post, userId: 1 });
    // invoke callback in order to reset form inputs
    done();
  }

  renderPostDetailPage = ({id, title, body}) => {
    return <PostDetail id={id} title={title} body={body} />;
  }

  renderPostsPage = (posts) => {
    return (
      <React.Fragment>
        <PostList posts={posts} onSelectPost={this.onSelectPost} />
        <div className="divider" />
        <AddPost onSubmitPost={this.onSubmitPost} />
      </React.Fragment>
    );
  }

  render() {
    const { posts, selectedPost } = this.props;
    return (
      <div className="container">
        { selectedPost ? this.renderPostDetailPage(selectedPost) : this.renderPostsPage(posts) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.data });

export default connect(mapStateToProps, {
  fetchPosts,
  selectPost,
  addPost,
})(App);
