import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseHeader } from './courseheader';
import { Topic } from './topic';
import { Unknown } from './unknown';

import 'bootstrap';

var courses = require('./courses');

class CourseChoice extends React.Component {
	
	constructor(props) {
		super(props);
		this.clickCourse = this.clickCourse.bind(this);
		// eventually courses will start out empty
		this.state = {courseindices: [], courses: []};
	}
	
	clickCourse(courseIndex) {
		var index = this.state.courseindices.indexOf(courseIndex);
		
		if (index > -1) {
			this.state.courseindices.splice(index, 1);
			this.state.courses.splice(index, 1);
		} else {
			this.state.courseindices.push(courseIndex);
			this.state.courses.push(courses[courseIndex]);
		}
		
		this.props.update(this.state.courses);
	}
	
	render() {
		
		this.props.update([courses[0],courses[1]]);
		
		var currentRoute = this.props.location.pathname;
				
		// copied from the students thing
		var courseid = this.props.match.params.course;
				
		var topics = courses[courseid].topics;
		
		var rows = [];
		for (var i = 0; i<topics.length; i++){
			const course = courses[i];			
			rows.push(<li key={course.id} index={i} role="presentation" onclick={this.clickCourse(i)}><Link to={pathHeader}>{topics[topicid].name}</Link></li>);
		}
		
		return (
			<div className="container">
				{<CourseHeader path={currentRoute} course={courses[courseid]}/>}	
				<ul>
				{rows}
				</ul>
				
			</div>
		)
	}
}

export { CourseChoice };