import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseHeader } from './courseheader';
import { Topic } from './topic';
import { Unknown } from './unknown';

import 'bootstrap';

var courses = require('./courses');

class Course extends React.Component {
	render() {
		
		var currentRoute = this.props.location.pathname;
				
		// copied from the students thing
		var courseid = this.props.match.params.course;
				
		var topics = courses[courseid].topics;
		
		var rows = [];
		const topic0 = topics[0];
		rows.push( <Route exact path={"/"+courseid} key=""
				render={() => (<Topic {...topic0} courseid={courseid}/>)}
				/> );
		for (var i = 0; i<topics.length; i++){
			const topic = topics[i];
			
			/* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf 
				tells how to pass extra props to the component */
			rows.push( <Route key={topic.id} path={"/"+courseid+"/"+topic.id}
					render={() => (<Topic {...topic} courseid={courseid}/>)}
					/> );
		}
		
		return (
			<div className="container">
				{<CourseHeader path={currentRoute} course={courses[courseid]}/>}	
					
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