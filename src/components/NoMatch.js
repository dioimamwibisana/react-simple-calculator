import React from 'react';

import Button from './Button';

const NoMatch = () => {
	return(
		<div className="no-match">
			<h1>Oops</h1>
			<small>Nothing to see here</small>
			<Button
				text={`Back to reality`}
				custom_color={`fibonacci`}
				link={`/`}
			/>
		</div>
	)
};

export default NoMatch;