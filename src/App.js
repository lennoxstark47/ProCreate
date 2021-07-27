import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Login from './components/login';
import Signup from './components/signup';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path='/' exact component={Login} />
					<Route
						path='/signup'
						exact
						component={Signup}
					/>
				</div>
			</BrowserRouter>
		);
	}
}
