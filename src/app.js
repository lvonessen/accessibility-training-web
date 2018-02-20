import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { CourseChoice } from './coursechoice';
import { Header } from './header';
import { Topic } from './topic';
import { Course } from './course';
import { Intro } from './intro';
import { Unknown } from './unknown';
import { GenSlides } from './genslides';

import 'bootstrap';

var webRoot = "/~laurav4/access";
var courses = require('./json/courses');

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
		this.isSelected = this.isSelected.bind(this);
		this.clickCourse = this.clickCourse.bind(this);

		this.lookUpCourseJson = this.lookUpCourseJson.bind(this);
    this.lookUpCourseTopicJson = this.lookUpCourseTopicJson.bind(this);

    var lookUpCourseIndexTable = new Object();
    for (var i=0; i<courses.length; i++){
			lookUpCourseIndexTable[courses[i].id] = i;
		}

    var lookUpCourseTopicTable = new Object();
    for (var i=0; i<courses.length; i++){
			lookUpCourseTopicTable[courses[i].id] = new Object();
      for (var j=0; j<courses[i].topics.length; j++){
        lookUpCourseTopicTable[courses[i].id][courses[i].topics[j].id] = j;
      }
		}

		// eventually courses will start out empty, not as [0]
		// list of relevant course *INDICES*
		this.state = {
      	courses: [],
        lookUpCourseIndexTable: lookUpCourseIndexTable,
        lookUpCourseTopicTable: lookUpCourseTopicTable
		};
	}

  lookUpCourseJson(courseID){
    var ind = this.state.lookUpCourseIndexTable[courseID];
    // course exists (and it's on our list?)
    if (ind != undefined) { // && this.state.courses.indexOf(courseIndex) > -1) {
        return courses[ind];
    }
    return undefined;
  }

  lookUpCourseTopicJson(courseID,topicID){
    var course = this.lookUpCourseJson(courseID);
    // course exists (and it's on our list?)
    if (course != undefined) { // && this.state.courses.indexOf(courseIndex) > -1) {
        var topInd = this.state.lookUpCourseTopicTable[courseID][topicID];
        if (topInd != undefined){
          return course.topics[topInd];
        }
    }
    return undefined;
  }

	isSelected(courseIndex){
		return this.state.courses.indexOf(courseIndex) > -1;
	}

	clickCourse(courseName) {
		var state = this.state;
    var courseIndex = this.state.lookUpCourseIndexTable[courseName];
    if (courseIndex == undefined){
      courseIndex = -1;
    }
		var index = state.courses.indexOf(courseIndex);

		if (index > -1) {
			// remove 1 at index index
			state.courses.splice(index, 1);
		} else {
			state.courses.push(courseIndex);
		}

		// have to change state like this otherwise everything breaks!!!
		this.setState({courses: state.courses, lookUpCourseIndexTable: this.state.lookUpCourseIndexTable});

	}

	render() {

		var currentRoute = this.props.location.pathname;

		// HERE is where courses get information passed to them
		// var courseRoutes = [];
		// for (var i=0; i<courses.length; i++){
		// 	var coursei = courses[i];
    //   console.log(coursei);
    //   // ...coursei probably only gets evaluated down below, so it's stuck at class2
		// 	courseRoutes.push(<Route key={coursei.id} path={"/"+coursei.id} render={() => (<Course {...coursei} currentRoute={currentRoute}/>)}
		// 			/>);
		// }

		return (
			<div className="container">
				<Header path={currentRoute} courses={this.state.courses}/>
				<Switch>
					<Route exact path="/" component={Intro}/>

					{/*<Route path="/coursechoice" component={Unknown}/>
					 the course picking page will need to get passed in the course change function */}

					<Route path={"/coursechoice"}
					render={() => (<CourseChoice update={this.clickCourse} isSelected={this.isSelected} state={this.state.courses}/>)}
					/>
					{/* hi
					*/}

          {/* For now, state-less */}
          <Route path="/slides" component={GenSlides}/>

					{/* shorthand for the individual course pages*/ /* {courseRoutes} */}
          <Route path={"/:course/:topic?"}
					render={() => (<Course lookUpCourseJson={this.lookUpCourseJson} lookUpCourseTopicJson={this.lookUpCourseTopicJson} currentRoute={currentRoute}/>)}
					/>

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
