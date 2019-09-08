import React from 'react';
import PostList from './PostList';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import jsonPlaceholder from '../api/jsonPlaceholder';


class App extends React.Component {

  state = { posts: [], post: null };

  componentDidMount = async () => {
    const response = await jsonPlaceholder.get('/posts');
    this.setState({ posts: response.data });
  }

  onPostDetailClick = (postId) => (e) => {
    // find post by postId
    const post = this.state.posts.find(post => post.id === postId);
    this.setState({ post });
  }

  onSubmitPost = (title, content, done) => async (e) => {
    e.preventDefault();
    // add new post
    const response = await jsonPlaceholder.post('/posts', {
      title, body: content, userId: 1
    });
    // update state
    this.setState({ posts: [ ...this.state.posts, response.data ] });
    // invoke callback in order to reset form inputs
    done();
  }

  renderPostDetailPage = ({id, title, body}) => {
    return <PostDetail id={id} title={title} body={body} />;
  }

  renderPostsPage = (posts) => {
    return (
      <React.Fragment>
        <PostList posts={posts} onPostDetailClick={this.onPostDetailClick} />
        <div className="divider" />
        <AddPost onSubmitPost={this.onSubmitPost} />
      </React.Fragment>
    );
  }

  render() {
    const { posts, post } = this.state;
    return (
      <div className="container">
        { post ? this.renderPostDetailPage(post) : this.renderPostsPage(posts) }
      </div>
    );
  }
}

export default App;
