import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => {
	return(
		<div className="no-match">
			<h1>Oops</h1>
			<small>Nothing to see here</small>
			<Link to={`/`}>Back to reality</Link>
		</div>
	)
};

export default NoMatch;