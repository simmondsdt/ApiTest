import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';
import User from './User';
import AddUser from './AddUser';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  sort() {
    let users = this.props.users.sort();
  }

  render() {
    let users = this.props.users.map(user => {
      return(
        <User
          key={user.id}
          user={user}
        />
      )
    });
    return(
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <br />
            <AddUser />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            {users}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(Users);
