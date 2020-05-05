import React, { Component } from 'react';
import './App.css';
import GamePageContainer from './components/GamePageContainer';
import LoginPageContainer from './components/LoginPageContainer';


class App extends Component {

  state = {
    loginStatus: null
  }
  
  loginStatusUpdate = (status) => {
    this.setState({ loginStatus: status })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.loginStatus === null || this.state.loginStatus === "unsuccessful" ? <LoginPageContainer loginStatus={this.state.loginStatus} loginStatusUpdate={this.loginStatusUpdate}/> : <></> }
        {this.state.loginStatus === "successful" ? <GamePageContainer /> : <></>}
      </div>
    );
  }
}

export default App;
