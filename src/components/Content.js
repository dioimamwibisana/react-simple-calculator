import React from 'react';
import Head from 'react-helmet';
import {Switch, Route} from 'react-router-dom';

import {capitalizeString} from '../utils';
import Sum from './Sum';
import Button from "./Button";
import Multiply from "./Multiply";
import Prime from "./Prime";
import Fibonacci from "./Fibonacci";

const Content = (props) => {
	const path_name = props.match.params.pathName;

	const title = capitalizeString(path_name);
	return(
		<div className={`content content--${path_name}`}>
			<Head
				title={title}
			/>
			<h1>{title}</h1>
			<div className="content__container">
				<Switch>
					<Route exact path={`/sum`} component={Sum} />
					<Route exact path={'/multiply'} component={Multiply} />
					<Route exact path={'/prime'} component={Prime} />
					<Route exact path={'/fibonacci'} component={Fibonacci} />
				</Switch>
			</div>
			<div className="content__button">
				<Button
					text={`Back to home`}
					custom_color={`black`}
					link={`/`}
				/>
			</div>
		</div>
	)
};

export default Content;