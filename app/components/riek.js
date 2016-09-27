var React = require('react');
var ReactDOM = require('react-dom');

import {RIEInput} from 'riek';

var Demo = React.createClass({
  getInitialState: function (e) {
    return {
      text: "Example text value"
    };
  },

  virtualServerCallback: function (newState) {
    this.setState(newState);
  },

  isStringAcceptable: function(string) {
    return (string.length > 1);
  },

  render: function () {
    return (<div>
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
    </div>);
  }
});

module.exports = Demo;