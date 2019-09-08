import React from 'react';
import InputText from './InputText';

class AddComment extends React.Component {

  state = { name: '', content: '' };

  onChangeInput = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { name, content } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s10">
            <h5>Add new comment</h5>
          </div>
          <form className="col s10">
            <div className="row">
              <InputText id='comment_name' label='name' value={name} onChange={this.onChangeInput('name')} />
              <InputText id='comment_content' label='Content' value={content} onChange={this.onChangeInput('content')} />
              <div className='col s12'>
                <button className="btn waves-effect waves-light" type="submit" >Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddComment;
