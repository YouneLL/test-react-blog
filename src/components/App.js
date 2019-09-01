import React from 'react';
import PostList from './PostList';
import PostCard from './PostCard';


class App extends React.Component {

  state = { post: null };

  handleDisplayPostClick = (post) => {
    this.setState({ post });
  }

  renderPost = ({id, title, body}) => {
    return <PostCard id={id} title={title} body={body} expend={true} />;
  }

  renderPostList = () => {
    return <PostList handleDisplayPostClick={this.handleDisplayPostClick}/>
  }

  render() {
    const { post } = this.state;
    return (
      <div className="container">
        <div className="row">
          <br />
          { post ? this.renderPost(post) : this.renderPostList() }
        </div>
      </div>
    );
  }
}

export default App;
