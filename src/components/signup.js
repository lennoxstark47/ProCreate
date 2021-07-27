import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
	constructor() {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			contact: '',
			email: '',
			password: '',
		};
	}

	onChangeFname = (event) => {
		this.setState({
			firstname: event.target.value,
		});
	};

	onChangeLastname = (event) => {
		this.setState({
			lastname: event.target.value,
		});
	};

	onChangeContact = (event) => {
		this.setState({
			contact: event.target.value,
		});
	};

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

		const newUser = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			contact: this.state.contact,
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post(
				'http://localhost:5000/users/add',
				newUser
			)
			.then((res) => console.log(res.data));

		this.setState({
			firstname: '',
			lastname: '',
			contact: '',
			email: '',
			password: '',
		});
	};
	render() {
		return (
			<div
				className='container'
				style={{ width: '400px' }}>
				<div style={{ marginTop: '100px' }}>
					<form onSubmit={this.handleSubmit}>
						<div className='mb-3'>
							<label
								htmlFor='firstname'
								className='form-label'>
								First Name
							</label>
							<input
								value={this.state.firstname}
								onChange={this.onChangeFname}
								type='text'
								className='form-control'
								id='firstname'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='lastname'
								className='form-label'>
								Last Name
							</label>
							<input
								value={this.state.lastname}
								onChange={this.onChangeLastname}
								type='text'
								className='form-control'
								id='lastname'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='contact'
								className='form-label'>
								Contact Number
							</label>
							<input
								value={this.state.contact}
								onChange={this.onChangeContact}
								type='text'
								className='form-control'
								id='contact'
								aria-describedby='emailHelp'
							/>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='email'
								className='form-label'>
								Email address
							</label>
							<input
								value={this.state.email}
								onChange={this.onChangeEmail}
								type='email'
								className='form-control'
								id='email'
								aria-describedby='emailHelp'
							/>
							<div id='emailHelp' className='form-text'>
								We'll never share your email with anyone
								else.
							</div>
						</div>
						<div className='mb-3'>
							<label
								htmlFor='password'
								className='form-label'>
								Password
							</label>
							<input
								value={this.state.password}
								onChange={this.onChangePassword}
								type='password'
								className='form-control'
								id='password'
							/>
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
