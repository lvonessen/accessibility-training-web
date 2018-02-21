import React from 'react';
import { Link } from 'react-router-dom';

var courses = require('./json/courses');

class Header extends React.Component {
	render() {

		var path = this.props.path || "";
		// list of courses selected by user
		// passed in from app.js
		var courselist = this.props.courses;

		var courselinks = [];
		for (var i=0; i<this.props.courses.length; i++){
			var courseindex = this.props.courses[i];
			var courseid = courses[courseindex].id;
			var coursename = courses[courseindex].name;
			courselinks.push( <li key={courseid} role="presentation" className={path.startsWith("/"+courseid) ? "active pointer pointer2" : "pointer pointer2"}><Link to={"/"+courseid}>{coursename}</Link></li> );
		}

		return (
			<div>
				{/* <ContactInfo/> */}
				<h1>Accessibility Curriculum Resource Tool</h1>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">

							<li key="intro" role="presentation" className={path === "/" ? "active pointer pointer2" : "pointer pointer2"}><Link to="/">Introduction</Link></li>
							<li key="coursechoice" role="presentation" className={path.startsWith("/coursechoice") ? "active pointer pointer2" : "pointer pointer2"}><Link to="/coursechoice">Choose your courses</Link></li>

							{/* Where you click to get taken to information relevant to that course */}
							{courselinks}

							<li key="slides" role="presentation" className={path.startsWith("/slides") ? "active pointer pointer2" : "pointer pointer2"}><Link to="/slides">Get materials</Link></li>

						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };
