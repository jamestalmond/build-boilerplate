import React from 'react';
import ReactDOM from 'react-dom';
import './SCSS/index';

function Title({ text }) {
	return (
		<h1>{ text }</h1>
	)
}

ReactDOM.render(<Title text="Mmm whatcha say" />, document.getElementById('app'));