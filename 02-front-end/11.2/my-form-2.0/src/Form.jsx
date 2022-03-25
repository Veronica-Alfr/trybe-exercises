import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';

class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: ''
      }
  }

  handleChange = ({ target }) => { 
    const { name, value } = target;
    const textValue = name === 'name' ? value.toUpperCase() : value;
    const resultValue = target.type === 'checkbox' ? target.checked : textValue
    this.setState({
       [name]: resultValue,
    })
  }

    render() {
    return( 
        <form>
        <Name value={ this.state.name.toUpperCase() } handleChange={ this.handleChange }/>
        <Email value={ this.state.email } handleChange={ this.handleChange }/>
        </form>
    )
    }
}

export default Form;
