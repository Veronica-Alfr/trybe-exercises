import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.prototype = {
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.
}

export default UserProfile;