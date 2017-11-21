import React from 'react';

import Login from './Login/Login.jsx';
import Chat from './Chat/Chat.jsx';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/chat" component={Chat}/>
        </div>
      </Router>
    )
  }
}
