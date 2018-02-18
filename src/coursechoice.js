import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import _ from 'lodash';

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

		var areas = ["applications", "prog_sys", "systems","theory","ai"];
		var prettyAreas = ["Applications", "Programming Systems", "Systems","Theory","AI"];

		var rows = [];
		var courseSubset = [];
		for (var i=0; i<areas.length; i++){
			courseSubset[i] = _.map(_.filter(courses, { 'area': areas[i] }), (course) => { return (<li key={course.id} role="presentation"><CourseOption course={course.id} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption></li>); });
			rows.push(<h2 key={areas[i]+"title"}>{prettyAreas[i]}</h2>);
			rows.push(<ul key={areas[i]+"content"}>{courseSubset[i]}</ul>);
		}

		return (
			<div className="container">
				{rows}

			</div>
		)
	}
}

export { CourseChoice };
