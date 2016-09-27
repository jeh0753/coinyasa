var React = require('react');
var ReactDOM = require('react-dom');

import {RIEInput} from 'riek';

var App2 = React.createClass({
  render: function () {
    return <h1>Hello world from App does this auto update?</h1>;
  }
});

var TodoBanner = React.createClass({
      render: function(){
        return (
          <h3>TODO ...react.js</h3>
        );
      }
    });

var TodoList = React.createClass({
  render: function() {
  var createItem = function(itemText) {
    return (
        <TodoListItem>{itemText}</TodoListItem>
      );
  };
  return <ul>{this.props.texts.map(createItem)}</ul>;
  }
});

var TodoListItem = React.createClass({
  getInitialState: function (e) {
    return {
      text: this.props.children
    };
  },

  virtualServerCallback: function (newState) {
    this.setState(newState);
    this.props.onTextChange(this.state.text);
  },

  isStringAcceptable: function(string) {
    return (string.length > 1);
  },

  render: function(){
    return (
      <li><RIEInput
          value={this.state.text}
          change={this.virtualServerCallback}
          propName="text"
          className="editable"
          validate={this.isStringAcceptable} /></li>
    );
  }
});

var TodoForm = React.createClass({
  getInitialState: function() {
    return {text: ''};
    },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.text);
    this.setState({text: ''});
    React.findDOMNode(this.refs.text).focus();
    return;
  },
  onChange: function(e){
    this.setState({
      text: e.target.value
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='text' onChange={this.onChange} value={this.state.text}/>
        <input type='submit' value='Add'/>
      </form>
    );
  }
});   

var Focused = React.createClass({
  
  render: function() {
    return <h1>{this.props.texts}</h1>;
  }
});


var TodoApp = React.createClass({
  getInitialState: function() {
  return {texts: ['Todo text #1', 'Todo text #2']};
  },
  updateItems: function(newItem) {
    var allItems = this.state.texts.concat([newItem]);
    this.setState({
    texts: allItems
  });
  },
  render: function() {
  return (
    <div>
    <TodoBanner/>
    <TodoList texts={this.state.texts} onTextChange={this.updateItems} />
    <TodoForm onFormSubmit={this.updateItems}/>
    <Focused texts={this.state.texts} />
    </div>
  );
  }
});

module.exports = TodoApp;

