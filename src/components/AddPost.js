import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class AddPost extends React.Component {

  state = { title: '', body: '' };

  onChangeInput = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  resetFrom = () => {
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="section">
        <div className="row">
          <div className="col s12">
            <h5>Add new Post</h5>
          </div>
          <form className="col s12" onSubmit={this.props.onSubmitPost(title, body, this.resetFrom)}>
            <div className="row">
              <InputText id='post_title' label='Title' value={title} onChange={this.onChangeInput('title')} />
              <InputText id='post_body' label='body' value={body} onChange={this.onChangeInput('body')} />
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
