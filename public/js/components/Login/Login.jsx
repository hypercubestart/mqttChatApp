import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
    this.setUsername = this.setUsername.bind(this);
    this.login = this.login.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  setUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  
  login() {
    console.log('login button pressed');
    
    login(this.state.username);
//     var url = "/login";
//     window.location.assign(url);
  }
  
  handleKeyPress(target) {
    if(target.charCode==13){
      this.login(); 
    }
  }

  
  render() {
    return(
      <div>
        Please Login
        <br/>
        <input type="text" onChange={this.setUsername} placeholder="Enter Username" onKeyPress={this.handleKeyPress}/>
        <br/>
        <p>Username: {this.state.username}</p>
        <br/>
        <button onClick={this.login}>Start</button>
        <p id="msg"></p>
      </div>
    )
  }
}