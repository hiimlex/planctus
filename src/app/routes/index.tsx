import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../ui/pages/Home";

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}></Route>
		</Switch>
	</Router>
);

export default Routes;
