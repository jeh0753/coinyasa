var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App-riek');
var Details = require('./components/App');


var Example = React.createClass({
  render: function () {
    return <h1>Hello world from the wrong place</h1>;
  }
});

ReactDOM.render(
	<App />, 
	document.getElementById('middle')
);

ReactDOM.render(
	<Details />,
	document.getElementById('sidebar')
);