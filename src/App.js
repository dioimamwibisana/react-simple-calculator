import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import './App.scss';
import Content from './components/Content';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => {
	const route_pattern = ':pathName(sum|multiply|prime|fibonacci)';
  return (
	  <Router>
	    <div className="App">
	      <div className="container">
		      <Switch>
			      <Route path={`/${route_pattern}`} component={Content}/>
			      <Route exact path="/" component={Home} />
			      <Route component={NoMatch}/>
		      </Switch>
	      </div>
	    </div>
	  </Router>
  );
}

export default App;
