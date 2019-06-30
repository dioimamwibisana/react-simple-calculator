import React from 'react';
import {Link} from "react-router-dom";

const Navigation = (props) => {
	return(
		<Link to={`${props.route}`} className={`nav nav--${props.route}`}>
			<h2>
				{props.title}
			</h2>
			<small>{props.description}</small>
		</Link>
	)
};

export default Navigation;