import React, {Component, Fragment} from 'react';

import {fibonacci_series} from '../utils';

class Fibonacci extends Component{
	constructor(props){
		super(props);
		this.state = {
			result: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInput = this.clearInput.bind(this);
	};

	clearInput(event) {
		this.setState({
			result: 0,
			first_number: 0,
			second_number: 0
		});
		event.preventDefault();
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		let first_number = parseInt(this.state.first_number);
		let f_series = fibonacci_series(first_number);
		this.setState({
			result: f_series.join(',')
		});
		event.preventDefault();
	}
	render() {
		let first_number = this.state.first_number;
		return(
			<Fragment>
				<span className="tagline">Find first N Fibonacci sequence, and print the result</span>
				<form className="summary" onSubmit={this.handleSubmit}>
					<div className="summary__top">
						<input className="input--left" name="first_number" value={first_number} onChange={this.handleInputChange} type="number"/></div>
					<div className="summary__bottom">
						<input className="button button--operation" type="submit" value="Go" />
						<span className="result">Result:<br/>{this.state.result}</span>
						{this.state.result !== 0 ? (
							<span className="button button--operation" onClick={this.clearInput}>Clear</span>
						) : null}
					</div>
				</form>
			</Fragment>
		)
	}
};

export default Fibonacci;