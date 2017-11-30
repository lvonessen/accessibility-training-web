import React from 'react';
import { Link } from 'react-router-dom';

var topics = require('./topics');

class CourseHeader extends React.Component {
	render() {
		
		//console.log("all hail the great course header.");
		
		var path = this.props.path || "";
		
		var course = this.props.course;
		
		var rows = [];
		rows.push(<li key={course.topics[0].id} role="presentation" className={(path === ("/"+course.id)) ? "active" : ""}><Link to={"/"+course.id}>{topics[course.topics[0].id].name}</Link></li>);
		for (var i=1; i < course.topics.length; i++){
			var topicid = course.topics[i].id;
			var pathHeader = "/"+course.id+"/"+topicid;
			rows.push(<li key={topicid} role="presentation" className={(path.startsWith(pathHeader)) ? "active" : ""}><Link to={pathHeader}>{topics[topicid].name}</Link></li>);
		}
		
		return (
			<div>
				{/* <ContactInfo/> */}
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							{rows}
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { CourseHeader };