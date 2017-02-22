import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/users';

class User extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.checkForNumber = this.checkForNumber.bind(this);
  }

  deleteUser(e) {
    e.preventDefault();
    let id = this.props.user.id;
    this.props.dispatch(deleteUser(id))
  }

  checkForNumber() {
    let user = this.props.user;
    if (user.phone_number === null ) {
      return(<i>None</i>);
    } else {
      return(user.phone_number);
    }
  }

  render() {
    let user = this.props.user;
    return(
        <div className="col s3">
          <div ref='users' className="card">
            <div className="center card-content white-text">
              <span className="card-title">{ user.first_name + ' ' + user.last_name }</span>
              <div>
                  <p>Phone Number: { this.checkForNumber() }</p>
              </div>
              <div className="card-action">
                <div onClick={this.deleteUser} className='btn' id='delete'><i className="material-icons">delete</i></div>
              </div>
            </div>
          </div>
        </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

export default connect(mapStateToProps)(User);
