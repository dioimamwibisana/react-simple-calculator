import React from 'react';

import Navigation from "./Navigation";

const Home = () => {

	const nav_array = [
		{
			title: 'Sum',
			description: 'Sum X & Y, and print the result',
			route: 'sum'
		},
		{
			title: 'Multiply',
			description: 'Multiply X & Y, and print the result',
			route: 'multiply'
		},
		{
			title: 'Prime',
			description: 'Find first N prime number, and print the result',
			route: 'prime'
		},
		{
			title: 'Fibonacci',
			description: 'Find first N Fibonacci sequence, and print the result',
			route: 'fibonacci'
		}
	];

	return(
		<div>
			<div className="navigation">
				{nav_array.map((item, i) => {
					return(
						<Navigation
							title={item.title}
							description={item.description}
							route={item.route}
							key={i}
						/>
					)
				})}
			</div>
		</div>
	)
};

export default Home;