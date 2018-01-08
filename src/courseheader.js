import React from 'react';
import { Link } from 'react-router-dom';

var topics = require('./topics');

class CourseHeader extends React.Component {
	render() {
		
		//console.log("all hail the great course header.");
		
		var path = this.props.path || "";
		
		var courseid = this.props.courseid;
		var coursetopics = this.props.coursetopics;
		
		var rows = [];
		rows.push(<li key={coursetopics[0].id} role="presentation" className={(path === ("/"+courseid)) ? "active" : ""}><Link to={"/"+courseid}>{topics[coursetopics[0].id].name}</Link></li>);
		for (var i=1; i < coursetopics.length; i++){
			var topicid = coursetopics[i].id;
			var pathHeader = "/"+courseid+"/"+topicid;
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