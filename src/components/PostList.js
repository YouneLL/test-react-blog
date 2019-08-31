import React from 'react';
import faker from 'faker';

class PostList extends React.Component {
  render() {
    return (
      <div className="container">

        <div class="row">

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 1" src="https://source.unsplash.com/random/800x600/?sig=1" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 2" src="https://source.unsplash.com/random/800x600/?sig=2" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 3" src="https://source.unsplash.com/random/800x600/?sig=3" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 1" src="https://source.unsplash.com/random/800x600/?sig=4" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 2" src="https://source.unsplash.com/random/800x600/?sig=5" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img alt="post 3" src="https://source.unsplash.com/random/800x600/?sig=6" />
                <span className="card-title">{faker.name.title()}</span>
              </div>
              <div className="card-content">
                <p>{faker.random.words()}</p>
              </div>
              <div className="card-action">
                <button class="waves-effect waves-light btn-small">Read more...</button>
              </div>
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default PostList;
