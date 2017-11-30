import React from 'react';
import { Link } from 'react-router-dom';
import { ContactInfo } from './contact';

var courses = require('./courses');
var topics = require('./topics');

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		var rows = [];
		for (var i=0; i<this.props.courses.length; i++){
			var courseid = this.props.courses[i];
			console.log(courseid);
			rows.push( <li key={courseid} role="presentation" className={path.startsWith("/"+courseid) ? "active" : ""}><Link to={"/"+courseid}>{courses[courseid].name}</Link></li> );
		}
		
		return (
			<div>
				{/* <ContactInfo/> */}
				<h1>Accessibility Curriculum Resources</h1>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li key="intro" role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Introduction</Link></li>
							<li key="courses" role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Choose your courses</Link></li>
							{rows}
							<li key="slides" role="presentation" className={path.startsWith("/slides") ? "active" : ""}><Link to="/slides">Get your slides</Link></li>
							{/*<li role="presentation"><a href="https://medium.com/bits-and-behavior" target='_blank'>Blog</a></li>*/}
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };