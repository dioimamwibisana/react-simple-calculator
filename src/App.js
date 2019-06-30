import React from 'react';
import {
	BrowserRouter as Router,
	Link,
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



		      {/**/}
		      {/*<Route path="/" component={Home} />*/}
		      {/*<Route path="/about" component={About}/>*/}
		      {/*<Route path="/:user" component={User}/>*/}
		      {/*<Route component={NoMatch}/>*/}
	      </div>
	    </div>
	  </Router>
  );
}

export default App;
