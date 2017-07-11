import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'


import Activities from './components/Activities.js'
import App from './components/App.js'
import Analytics from './components/Analytics.js'




ReactDOM.render(
	 <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Activities} />
         <Route path = "Activities" component = {Activities} />
         <Route path = "Analytics" component = {Analytics} />
         
      </Route>
   </Router>,
	document.getElementById('app')
);