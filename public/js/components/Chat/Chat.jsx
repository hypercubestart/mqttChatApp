import React from 'react';
import mqtt from 'mqtt';

import ChatWindow from './ChatWindow.jsx';

export default class Chat extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.gotMessage = this.gotMessage.bind(this);
  }
  componentDidMount() {
    var client = mqtt.connect();

    client.subscribe("test");

    client.on("message",this.gotMessage);
    
    this.setState({
      client: client
    })

    test('Welcome to Chat!'); 
  }
  
  gotMessage(topic, payload) {
    //alert([topic, payload].join(": "));
    console.log(payload.toString());
    var msgs = this.state.messages;
     
     msgs.push({topic: topic, payload: payload.toString()});
      
     this.setState({
       messages: msgs
     });
     console.log(this.state.messages);
  }
  
  sendMessage() {
    this.state.client.publish("test", this.state.msg);
    this.setState({
      msg: ''
    })
  }
  
  setMessage(event) {
    this.setState({
      msg: event.target.value
    })
  }
  
  handleKeyPress(target) {
    if(target.charCode==13){
      this.sendMessage(); 
    }
  }

  
  render() {
    return (
      <div>
        Chat Window!
        <ChatWindow  messagesList={this.state.messages}/>
          <input type="text" onChange={this.setMessage} onKeyPress={this.handleKeyPress} value={this.state.msg}/>
          <input type="button" onClick={this.sendMessage} value="Send"/>
      </div>
    )
  }
}