import React from 'react';
import PostList from './PostList';
import PostCard from './PostCard';
import jsonPlaceholder from '../api/jsonPlaceholder';
import Comment from './Comment';


class App extends React.Component {

  state = { posts: [], post: null };

  componentDidMount = async () => {
    const response = await jsonPlaceholder.get('/posts');
    this.setState({ posts: response.data });
  }

  onPostCardActionClick = (postId) => (e) => {
    // find post by postId
    const post = this.state.posts.find(post => post.id === postId);
    this.setState({ post });
  }

  renderPost = ({id, title, body}) => {
    return <PostCard id={id} title={title} body={body} box={'grow'} />;
  }

  renderPostList = (posts) => {
    return <PostList posts={posts} onPostCardActionClick={this.onPostCardActionClick}/>
  }

  render() {
    const { posts, post } = this.state;
    return (
      <div className="container">
        <div className="row">
          { post ? this.renderPost(post) : this.renderPostList(posts) }
        </div>
        <div className="row">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}

export default App;
