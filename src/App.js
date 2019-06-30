import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import './App.scss';
import Multiply from './components/Multiply';
import Home from './components/Home';

const App = () => {
  return (
	  <Router>
	    <div className="App">
	      <div className="container">
		      <Switch>
			      <Route path="/multiply" component={Multiply}/>
			      <Route exact path="/" component={Home} />
		      </Switch>
		      {/*<Route component={NoMatch}/>*/}
	      </div>
	    </div>
	  </Router>
  );
}

export default App;
