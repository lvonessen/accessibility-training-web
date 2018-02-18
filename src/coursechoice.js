import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Topic } from './topic';
import { Unknown } from './unknown';
import { CourseOption } from './courseoption';

import 'bootstrap';

var courses = require('./json/courses');

class CourseChoice extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var appCourses = _.map(_.filter(courses, { 'area': "applications" }), (course) => { return (<li key={course.id} role="presentation"><CourseOption course={course.id} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption></li>); });

		var courseoptions = [];
		for (var i = 0; i<courses.length; i++){
			var course = courses[i];
			// pass course *INDEX* into update to toggle selection
			courseoptions.push(<li key={course.id} role="presentation"><CourseOption course={course.id} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption></li>);
		}

		return (
			<div className="container">
				<ul>
				{courseoptions}
				{appCourses}
				</ul>

			</div>
		)
	}
}

export { CourseChoice };
