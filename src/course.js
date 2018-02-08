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
		// don't want the beginning "/", also want to ignore anything after the next "/", if anything
		var courseid = (currentRoute.split("/"))[1];

		var course = this.props.lookUp(courseid);

		if (course == undefined){
			console.log ("Oh nos! That course doesn't exist")
			// This is proper syntax. Yay!
			return (
				<Route component={Unknown}/>
			)
		} else {

			// from course json, not from topics json
			var topics = course.topics;

			var rows = [];
			var topic;
			var pathname;
			for (var i = 0; i<topics.length; i++){
				topic = topics[i];

				// first row has different pathname
				if (i==0)
				{
					pathname = "/"+courseid;
				}else{
					pathname = "/"+courseid+"/"+topic.id;
				}

				/* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
					tells how to pass extra props to the component */
				rows.push( <Route key={topic.id} path={pathname}
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
}

export { Course };
