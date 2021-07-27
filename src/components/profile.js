import axios from 'axios';
import React, { Component } from 'react';

export default class Profile extends Component {
	constructor() {
		super();
		this.state = {
			Name: '',
			LastName: '',
			email: '',
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/users/')
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<div>
				<h1>Name</h1>
				<h3>LastName</h3>
				<p>email</p>
			</div>
		);
	}
}
