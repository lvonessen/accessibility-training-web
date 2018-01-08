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
		this.clickCourse = this.clickCourse.bind(this);
		this.isSelected = this.isSelected.bind(this);
		this.state = {courseindices: []};
	}
	
	isSelected(courseIndex){
		return this.state.courseindices.indexOf(courseIndex) > -1;
	}
	
	clickCourse(courseIndex) {
		var index = this.state.courseindices.indexOf(courseIndex);
		
		if (index > -1) {
			// remove 1 at index index
			this.state.courseindices.splice(index, 1);
		} else {
			this.state.courseindices.push(courseIndex);
		}
		
		this.props.update(this.state.courseindices);
	}
	
	render() {
		
		var courseoptions = [];
		for (var i = 0; i<courses.length; i++){
			var course = courses[i];
			courseoptions.push(<li key={course.id} role="presentation"><CourseOption course={i} name={course.name} update={this.clickCourse} selected={this.isSelected}></CourseOption></li>);
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