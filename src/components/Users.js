import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    debugger;
    return (
      <div>
        <ul>
          Users!
          { this.props.users.map((u, index) => 
            <li key={index}>{u.username}</li>
          )}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <p>Total Users: { this.props.userCount }</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  debugger;
  return { users: state.users, userCount: state.users.length }
  debugger;
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
