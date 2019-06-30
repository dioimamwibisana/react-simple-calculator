import React, {Component, Fragment} from 'react';

import {sum} from '../utils';

class Sum extends Component{
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
		})
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
		let second_number = parseInt(this.state.second_number);
		let result_sum = sum(first_number, second_number);
		console.log(result_sum)
		this.setState({
			result: result_sum
		});
		event.preventDefault();
	}
	render() {
		let first_number = this.state.first_number;
		let second_number = this.state.second_number;
		return(
			<Fragment>
				<span className="tagline">Sum X & Y, and print the result</span>
				<form className="summary" onSubmit={this.handleSubmit}>
					<div className="summary__top">
						<input className="input--left" name="first_number" value={first_number} onChange={this.handleInputChange} type="number"/>
						<span className="operator">X</span>
						<input className="input--right" name="second_number" value={second_number} onChange={this.handleInputChange} type="number"/>
					</div>
					<div className="summary__bottom">
						<input className="button button--operation" type="submit" value="Go" style={{textAlign: 'center'}} />
						<span>Result:</span>
						<span>{this.state.result}</span>
						{this.state.result !== 0 ? (
							<span className="button button--operation" onClick={this.clearInput}>Clear</span>
						) : null}
					</div>
				</form>
			</Fragment>
		)
	}
};

export default Sum;