import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import UserProjects from './components/UserProjects'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: [] };
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/myquite`)
    .then(res => res.json())
    .then((user) => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="App">
        <UserInfo />
        <UserProjects user={this.state.user}/>
      </div>
    );
  };
};

export default App;
