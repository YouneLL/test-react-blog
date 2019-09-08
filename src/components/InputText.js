import React from 'react';
import Proptypes from 'prop-types'

class InputText extends React.Component {

  state = { labelIsActive: false };

  onInputFocusChange = (labelIsActive) => () => {
    this.setState({ labelIsActive });
  }

  render() {
    const { children, value, id, type, placeholder, label, columns, onChange } = this.props;
    return (
      <div className={`input-field col ${columns}`}>
        { children }
        <input
          value={value}
          placeholder={placeholder}
          id={id}
          type={type}
          className="validate"
          onBlur={this.onInputFocusChange(!!value)}
          onFocus={this.onInputFocusChange(true)}
          onChange={onChange}
        />
        <label className={this.state.labelIsActive ? 'active' : undefined} htmlFor={id}>{label}</label>
      </div>
    )
  }
}

InputText.defaultProps = {
  type: 'text',
  label: '',
  columns: 's12'
}

InputText.propTypes = {
  value: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  id:  Proptypes.string.isRequired,
  type:  Proptypes.string,
  label: Proptypes.string.isRequired,
  columns: Proptypes.string,
  onChange: Proptypes.func,
}

export default InputText;
