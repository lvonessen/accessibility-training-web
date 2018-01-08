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
		this.state = {courseindices: []};
	}
	
	clickCourse(courseIndex) {
		console.log("clicked on course i "+courseIndex);
		var index = this.state.courseindices.indexOf(courseIndex);
		
		if (index > -1) {
			// remove 1 at index index
			this.state.courseindices.splice(index, 1);
		} else {
			this.state.courseindices.push(courseIndex);
		}
		
		this.props.update(this.state.courseindices);
	}
	
	// gets called once at beginning
	componentWillMount() {
		// eventually courses will start out empty
		//this.clickCourse(0);
		//this.clickCourse(1);
	}
	
	render() {
		
		console.log("Hi hello the hell?");
		
		var courseoptions = [];
		for (var i = 0; i<courses.length; i++){
			var course = courses[i];
			courseoptions.push(<li key={course.id} role="presentation" className={this.state.courseindices.indexOf(i) > -1 ? "active" : ""}><CourseOption course={i} name={course.name} update={this.clickCourse}></CourseOption></li>);
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