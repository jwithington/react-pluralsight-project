var React = require('react');
var ReactDOM = require('react-dom');

console.log('hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList items={initial}/>, app);
