import React from 'react';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.messagesList.map(function(messageValue, index) {
          return <li key={index}>{messageValue.payload}</li>;
        }, this)}
      </ul>
    )
  }
} 