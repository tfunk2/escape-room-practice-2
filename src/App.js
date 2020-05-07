import React, { Component } from 'react';
import './App.css';
import GamePageContainer from './components/GamePageContainer';
import LoginPageContainer from './components/LoginPageContainer';


class App extends Component {

  state = {
    loginStatus: null,
    username: "",
    password: "",
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
  }

  loginStatusUpdate = (status) => {
    this.setState({ loginStatus: status })
  }
  
  render() {
    return (
      <div className="App">

        {
          this.state.loginStatus === null || 
          this.state.loginStatus === "unsuccessful" ? 
          <LoginPageContainer 
            usernameState={this.state.username}
            passwordState={this.state.password}
            handleChange={this.handleChange} 
            loginStatus={this.state.loginStatus} 
            loginStatusUpdate={this.loginStatusUpdate}
          /> : <></> 
        }
        {
          this.state.loginStatus === "successful" ? 
          <GamePageContainer usernameState={this.state.username} /> : <></>
        }
      </div>
    );
  }
}

export default App;
