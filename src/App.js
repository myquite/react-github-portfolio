import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

import UserInfo from './components/UserInfo';
import ProjectList from './components/ProjectList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "myquite", // username is the github profile that will be fetched. 
      user: [],
      repos: [],
      loading: true
    };
  };

  componentDidMount() {
    // Gather user info for UserInfo component.
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then(res => res.json())
    .then((user) => {
      this.setState({ user });
    });

    // Gather users public repos to add to the ProjectList component.
    fetch(`https://api.github.com/users/${this.state.username}/repos`)
    .then(res => res.json())
    .then((repos) => {
      this.setState({ 
        repos,
        loading: false
       });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
           <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <section className="App">
          <Helmet title={this.state.user.name + "'s Portfolio"} /> 
          <UserInfo user={this.state.user}/>
          <ProjectList repos={this.state.repos} username={this.state.username}/>
        </section>
      )
    }
  };
};

export default App;
