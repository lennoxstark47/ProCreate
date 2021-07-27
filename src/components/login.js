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

		const newLogin = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post(
				'http://localhost:5000/login',
				newLogin
			)
			.then((res) => {
				window.location =
					'/users/' + res.data._id;
			})
			.catch((err) => console.log(err));
		this.setState({
			email: '',
			password: '',
		});
	};

	render() {
		return (
			<div
				className='container'
				style={{ width: '400px' }}>
				<div style={{ marginTop: '200px' }}>
					<form onSubmit={this.handleSubmit}>
						<div className='mb-3'>
							<label
								htmlFor='Email'
								className='form-label'>
								Email address
							</label>
							<input
								value={this.state.email}
								onChange={this.onChangeEmail}
								type='email'
								className='form-control'
								id='Email'
								aria-describedby='emailHelp'
							/>
							<div
								id='emailHelp'
								className='form-text'>
								We'll never share your email with
								anyone else.
							</div>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='Password'
								className='form-label'>
								Password
							</label>
							<input
								value={this.state.password}
								onChange={this.onChangePassword}
								type='password'
								className='form-control'
								id='Password'
							/>
						</div>
						<div>
							{`Dont have an account? Click `}
							<Link to='/signup'>Here</Link>
						</div>
						<button
							type='submit'
							className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
