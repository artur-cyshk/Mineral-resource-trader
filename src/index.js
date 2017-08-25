import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Root } from './containers';


const store = compose(applyMiddleware(thunk))(createStore)(reducer);
ReactDOM.render(
	<Provider store={store}>
 		<Root /> 
 	</Provider>,
 	document.getElementById('root')
);
