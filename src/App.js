import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Switch,
	Route
} from 'react-router-dom';

import './App.scss';
import Multiply from './components/Multiply';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <div className="container">
	      <Router>
		      <NavLink to="/">Home</NavLink>
	        <NavLink to="/multiply">Multiply</NavLink>

		      <Switch>
			      <Route path="/multiply" component={Multiply}/>
			      <Route path="/" component={Home} />
			      {/*<Route path="/about" component={About}/>*/}
			      {/*<Route path="/:user" component={User}/>*/}
			      {/*<Route component={NoMatch}/>*/}
		      </Switch>
	      </Router>
      </div>
    </div>
  );
}

export default App;
