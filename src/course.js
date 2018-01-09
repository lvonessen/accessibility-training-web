import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseHeader } from './courseheader';
import { Topic } from './topic';
import { Unknown } from './unknown';

import 'bootstrap';

class Course extends React.Component {
	render() {
		
		var currentRoute = this.props.currentRoute;
		
		var courseid = this.props.id;
		
		// from course json, not from topics json
		var topics = this.props.topics;
				
		var rows = [];
		var topic = topics[0];
		rows.push( <Route key={topic.id} path={"/"+courseid}
					render={() => (<Topic {...topic} courseid={courseid}/>)}
					/> );
		for (var i = 0; i<topics.length; i++){
			topic = topics[i];
			
			/* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf 
				tells how to pass extra props to the component */
			rows.push( <Route key={topic.id} path={"/"+courseid+"/"+topic.id}
					render={() => (<Topic {...topic} courseid={courseid}/>)}
					/> );
		}
		
		return (
			<div className="container">
				<CourseHeader path={currentRoute} courseid={courseid} coursetopics={topics}/>
					
				{/* potentially have an intro page before the different topics?
					 then again "intro" is a pretty good lead-in regardless. */}
				
				<Switch>
					{rows}
					<Route path="*" component={Unknown}/>
				</Switch>
				
			</div>
		)
	}
}

export { Course };