import React from 'react';
import PostCard from './PostCard';
import faker from 'faker';

class PostList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PostCard id={1} title={faker.random.word()} content={faker.random.words(2)} />
          <PostCard id={2} title={faker.random.word()} content={faker.random.words(2)}/>
          <PostCard id={3} title={faker.random.word()} content={faker.random.words(2)}/>
          <PostCard id={4} title={faker.random.word()} content={faker.random.words(2)}/>
          <PostCard id={5} title={faker.random.word()} content={faker.random.words(2)}/>
          <PostCard id={6} title={faker.random.word()} content={faker.random.words(2)}/>
        </div>
      </div>
    );
  }
}

export default PostList;
