import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	onChangeEmail = (event) => {
		this.setState({
			email: event.target.value,
		});
	};
	onChangePassword = (event) => {
		this.setState({
			password: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		const newLogin = {
			email,
			password,
		};
		console.log(newLogin);
		// this.setState({
		// 	email: '',
		// 	password: '',
		// });
	};

	render() {
		return (
			<div
				className='container'
				style={{ width: '400px' }}>
				<div style={{ marginTop: '200px' }}>
					<form>
						<div class='mb-3'>
							<label htmlFor='Email' class='form-label'>
								Email address
							</label>
							<input
								value={this.state.email}
								onChange={this.onChangeEmail}
								type='email'
								class='form-control'
								id='Email'
								aria-describedby='emailHelp'
							/>
							<div id='emailHelp' class='form-text'>
								We'll never share your email with anyone
								else.
							</div>
						</div>
						<div class='mb-3'>
							<label
								htmlFor='Password'
								class='form-label'>
								Password
							</label>
							<input
								type='password'
								class='form-control'
								id='Password'
							/>
						</div>
						<div>
							{`Dont have an account? Click `}
							<Link to='/signup'>Here</Link>
						</div>
						<button
							type='submit'
							class='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
