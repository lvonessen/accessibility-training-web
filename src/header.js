import React from 'react';
import { Link } from 'react-router-dom';

var courses = require('./courses');

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		// list of courses selected by user
		// passed in from app.js
		var courselist = this.props.courses;
		
		var courselinks = [];
		for (var i=0; i<courselist.length; i++){
			var courseindex = courselist[i];
			var courseid = courses[courseindex].id;
			var coursename = courses[courseindex].name;
			courselinks.push( <li key={courseid} role="presentation" className={path.startsWith("/"+courseid) ? "active" : ""}><Link to={"/"+courseid}>{coursename}</Link></li> );
		}
		
		return (
			<div>
				{/* <ContactInfo/> */}
				<h1>Accessibility Curriculum Resources</h1>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
						
							<li key="intro" role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Introduction</Link></li>
							<li key="coursechoice" role="presentation" className={path.startsWith("/coursechoice") ? "active" : ""}><Link to="/coursechoice">Choose your courses</Link></li>
							
							{/* Where you click to get taken to information relevant to that course */}
							{courselinks}
							
							<li key="slides" role="presentation" className={path.startsWith("/slides") ? "active" : ""}><Link to="/slides">Get your slides</Link></li>
							
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };