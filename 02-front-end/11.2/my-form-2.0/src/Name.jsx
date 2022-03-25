import React, { Component } from 'react'

class Name extends Component {
    render() {

        const { value, handleChange } = this.props;

        return(
          <fieldset>
              <label htmlFor='userName'>
                  Nome:
                  <input
                  maxLength={40}
                  id="userName"
                  name="name"
                  type="text"
                  value={value}
                  onChange={handleChange}
                  />
              </label>
          </fieldset>
        )
        }
}

export default Name;
