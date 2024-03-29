import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

import UserInfo from './components/UserInfo';
import ProjectList from './components/ProjectList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'myquite', // username is the github profile that will be fetched.
      contact: 'myquite@gmail.com', // email used in Hireable component.
      user: [],
      repos: [],
      loading: true
    };
  }

  componentDidMount() {
    // Gather user info for UserInfo component.
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(res => res.json())
      .then(user => {
        this.setState({ user });
      });

    // Gather users public repos to add to the ProjectList component.
    fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then(res => res.json())
      .then(repos => {
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
          <span />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Helmet title={this.state.user.name + "'s Portfolio"} />
          <UserInfo user={this.state.user} contact={this.state.contact} />
          <ProjectList
            repos={this.state.repos}
            username={this.state.username}
          />
        </div>
      );
    }
  }
}

export default App;
