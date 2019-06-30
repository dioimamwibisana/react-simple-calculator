import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
	return(
		<div>
			<div className="navigation">
				<Link to="/sum" className="nav nav--sum">Sum</Link>
				<Link to="/multiply" className="nav nav--multiply">Multiply</Link>
				<Link to="/multiply" className="nav nav--prime">Prime</Link>
				<Link to="/multiply" className="nav nav--fibonacci">Fibonacci</Link>
			</div>
		</div>
	)
};

export default Home;