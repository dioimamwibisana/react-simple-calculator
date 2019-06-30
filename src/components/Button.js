import React from 'react';
import {Link} from "react-router-dom";

const Button = (props) => {
	return(
		<Link className={`button button--${props.custom_color}`} to={props.link}>{props.text}</Link>
	)
};

export default Button;