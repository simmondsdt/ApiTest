import React, { Component } from 'react';
import Users from '../components/Users';

class App extends Component {
  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper" id='nav'>
            <a href="/" className="center brand-logo">Savvi</a>
          </div>
        </nav>
        <div>
          <br />
          <Users />
        </div>
      </div>
    );
  };
}

export default App;
