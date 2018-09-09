import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import UserProjects from './components/UserProjects'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      user: [],
      repos: []
    };
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/myquite`)
    .then(res => res.json())
    .then((user) => {
      this.setState({ user });
    });

    fetch(`https://api.github.com/users/myquite/repos`)
    .then(res => res.json())
    .then((repos) => {
      this.setState({ repos });
    });

  }

  render() {
    return (
      <div className="App">
        <UserInfo user={this.state.user}/>
        <UserProjects repos={this.state.repos}/>
      </div>
    );
  };
};

export default App;
