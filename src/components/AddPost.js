import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddPost extends React.Component {

  state = { title: '', content: '' };

  onChangeInput = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  resetFrom = () => {
    this.setState({ title: '', content: '' });
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h5>Add new Post</h5>
          </div>
          <form className="col s12" onSubmit={this.props.onSubmitPost(title, content, this.resetFrom)}>
            <div className="row">
              <InputText id='post_title' label='Title' value={title} onChange={this.onChangeInput('title')} />
              <InputText id='post_content' label='Content' value={content} onChange={this.onChangeInput('content')} />
              <div className='col s12'>
                <button className="btn waves-effect waves-light" type="submit" >Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

AddPost.propTypes = {
  onSubmitPost: PropTypes.func,
};


export default AddPost;
