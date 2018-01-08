import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Topic } from './topic';
import { Unknown } from './unknown';
import { CourseOption } from './courseoption';

import 'bootstrap';

var courses = require('./courses');

class CourseChoice extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		var courseoptions = [];
		for (var i = 0; i<courses.length; i++){
			var course = courses[i];
			// pass course *INDEX* into update to toggle selection
			courseoptions.push(<li key={course.id} role="presentation"><CourseOption course={i} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption></li>);
		}
		
		return (
			<div className="container">
				<ul>
				{courseoptions}
				</ul>
				
			</div>
		)
	}
}

export { CourseChoice };