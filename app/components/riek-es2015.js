import React from 'react';
import ReactDOM from 'react-dom';
import {RIEInput} from 'riek';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text : "Example text value",
    };
  }

  virtualServerCallback = (newState) => {
    this.setState(newState);
  };

  isStringAcceptable = (string) => {
    return (string.length >= 1);  // Minimum 1 letters long
  };

  render = () => {
      return <div>
      <h3>Input</h3>
      <div>
        <span>Default: </span>
        <RIEInput
          value={this.state.text}
          change={this.virtualServerCallback}
          propName="text"
          className="editable"
          validate={this.isStringAcceptable} />
      </div>
    </div>;
  };
}

module.exports = Demo;