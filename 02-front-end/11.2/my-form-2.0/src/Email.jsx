import React, { Component } from 'react'

class Email extends Component {
  render() {

    const { value, handleChange } = this.props;

    return (
        <fieldset>
        <label htmlFor='userEmail'>
            Email:
            <input
            maxLength={50}
            id="userEmail"
            name="email"
            type="text"
            value={value}
            onChange={handleChange}
            />
        </label>
    </fieldset>
    )
  }
}

export default Email;
