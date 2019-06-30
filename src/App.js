import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import './App.scss';
import Multiply from './components/Multiply';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
	  <Router>
	    <div className="App">
	      <div className="container">
		      <Switch>
			      <Route path="/multiply" component={Multiply}/>
			      <Route exact path="/" component={Home} />
			      <Route component={NoMatch}/>
		      </Switch>

	      </div>
	    </div>
	  </Router>
  );
}

export default App;
