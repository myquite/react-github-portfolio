import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import ProjectList from './components/ProjectList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "myquite", 
      user: [],
      repos: []
    };
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.login}`)
    .then(res => res.json())
    .then((user) => {
      this.setState({ user });
    });

    fetch(`https://api.github.com/users/${this.state.login}/repos`)
    .then(res => res.json())
    .then((repos) => {
      this.setState({ repos });
    });
  }

  render() {
    return (
      <section className="App">
        <UserInfo user={this.state.user}/>
        <ProjectList repos={this.state.repos} login={this.state.login}/>
      </section>
    );
  };
};

export default App;
