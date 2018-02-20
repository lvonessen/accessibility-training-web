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

		//var appCourses = _.map(_.sort(_.filter(courses, { 'area': "applications" }),{ 'area': "applications" }), (course) => { return (<li key={course.id} role="presentation"><CourseOption course={course.id} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption></li>); });

		var areas = ["applications", "prog_sys", "systems","theory","ai"];//,"other"];
		var prettyAreas = ["Applications", "Programming Systems", "Systems","Theory","AI"];//,"Other"];

		var rows = [];
		var courseSubset = [];
		for (var i=0; i<areas.length; i++){
			courseSubset[i] = _.map(_.sortBy(_.filter(courses, { 'area': areas[i] }),['name']), (course) => { return (<CourseOption key={course.id} course={course.id} name={course.name} update={this.props.update} selected={this.props.isSelected}></CourseOption>); });
			rows.push(<h3 key={areas[i]+"title"}>{prettyAreas[i]}</h3>);
			// fieldset is for grouping input fields
			rows.push(<fieldset key={areas[i]+"content"}>{courseSubset[i]}</fieldset>);
		}

		return (
			<div className="container">
				<h2>Course Choice</h2>
				Choose from among the following courses (organized into course areas) in order to see accessibility topics personalized to that course.
				{rows}

			</div>
		)
	}
}

export { CourseChoice };
