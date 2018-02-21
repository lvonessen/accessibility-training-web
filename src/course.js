import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseHeader } from './courseheader';
import { Topic } from './topic';
import { Unknown } from './unknown';

import 'bootstrap';
var topics = require('./json/topics');

class Course extends React.Component {
	render() {
		var currentRoute = this.props.currentRoute;
		// don't want the beginning "/", also want to ignore anything after the next "/", if anything
		var pathSplit = currentRoute.split("/");
		var courseId = pathSplit[1];
		var topicId = pathSplit[2];
		//console.log(pathSplit);
		//console.log(topicId);

		var course = this.props.lookUpCourseJson(courseId);

		if (topicId == undefined || topicId == ""){
			topicId = course.topics[0].id;
		}
		var topic = this.props.lookUpCourseTopicJson(courseId,topicId);
			//console.log (course)
			//console.log(topic)

		if (course == undefined || topic == undefined){
			console.log ("Oh nos! That course or topic doesn't exist")
			// This is proper syntax. Yay!
			return (
				<Route component={Unknown}/>
			)
		} else {

			return (
				<div className="container">
					{/*<CourseHeader path={currentRoute} courseId={courseId} coursetopics={course.topics}/> */}

					{/* potentially have an intro page before the different topics?
						 then again "intro" is a pretty good lead-in regardless. */}

					<Topic {...topic} path={currentRoute} courseId={courseId} courseName={course.name}/>

				</div>
			)
		}
	}
}

export { Course };
