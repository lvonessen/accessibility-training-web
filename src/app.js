import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseChoice } from './coursechoice';
import { Header } from './header';
import { Topic } from './topic';
import { Course } from './course';
import { Intro } from './intro';
import { Unknown } from './unknown';

import 'bootstrap';

var webRoot = "/";
var courses = require('./courses');

// Polyfill startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

class App extends React.Component {
	
	constructor(props) {
		super(props);
		
		// course change uses this to change state (which the header pays attention to)
		this.handleCourseChange = this.handleCourseChange.bind(this);
		
		// eventually courses will start out empty
		// list of relevant course *INDICES*
		this.state = {courses: ["0"]};
	}
	
	handleCourseChange(newCourses) {
		this.setState({courses: newCourses});
	}	
	
	render() {
		
		var currentRoute = this.props.location.pathname;
		
		// HERE is where courses get information passed to them
		var courseRoutes = [];
		for (var i=0; i<courses.length; i++){
			var coursei = courses[i];
			courseRoutes.push(<Route key={coursei.id} path={"/"+coursei.id} render={() => (<Course {...coursei} currentRoute={currentRoute}/>)}
					/>);
		}
		
		return (
			<div className="container">
				<Header path={currentRoute} courses={this.state.courses}/>
				<Switch>
					<Route exact path="/" component={Intro}/>
						
					{/*<Route path="/coursechoice" component={Unknown}/>
					 the course picking page will need to get passed in the course change function */}				
					
					<Route path={"/coursechoice"}
					render={() => (<CourseChoice update={this.handleCourseChange}/>)}
					/>
					{/* hi
					*/}
					
					{/* shorthand for the individual course pages */}				
					{courseRoutes}
					
					<Route path="/slides" component={Unknown}/>
					
					{/* would have to be at the end because it will 
						 match anything, but course does instead */}
					<Route path="*" component={Unknown}/>
				</Switch>
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter basename={webRoot}>
		<Route path="/" component={App} />
	</BrowserRouter>
), document.getElementById('app'));
