import React, { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import ProjectList from './components/ProjectList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "myquite", 
      user: [],
      repos: []
    };
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then(res => res.json())
    .then((user) => {
      this.setState({ user });
    });

    fetch(`https://api.github.com/users/${this.state.username}/repos`)
    .then(res => res.json())
    .then((repos) => {
      this.setState({ repos });
    });
  }

  render() {
    return (
      <section className="App">
        <UserInfo user={this.state.user}/>
        <ProjectList repos={this.state.repos} username={this.state.username}/>
      </section>
    );
  };
};

export default App;
