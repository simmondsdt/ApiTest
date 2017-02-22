import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/users'

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {users: []}
  }

  handleSubmit(e) {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    let phone_number = this.refs.phone_number.value;
    this.props.dispatch(createUser(first_name, last_name, phone_number))
    this.refs.add_user_form.reset();
  }

  render() {
    return(
      <div className="row">
        <form ref='add_user_form' className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <input ref='first_name' placeholder="First Name (required)" type="text" required />
            </div>
            <div className="input-field col s4">
              <input ref='last_name' placeholder='Last Name (required)' type="text" required />
            </div>
            <div className="input-field col s4">
              <input ref='phone_number' placeholder='Phone Number' type="number" />
            </div>
          </div>
          <div className='center row'>
            <div onClick={this.handleSubmit} className='btn' id='add'>Add User</div>
          </div>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(AddUser);
