import React from 'react';
import { Link } from 'react-router-dom';

var topics = require('./json/topics');

class CourseHeader extends React.Component {

	constructor(props) {
		super(props);

		// not sure why this would be necessary
		this.isActive = this.isActive.bind(this);
	}

	isActive(path,pathHeader,index){
		if (index == 0) {
			return path === pathHeader;
		} else {
			return path.startsWith(pathHeader);
		}
	}

	render() {

		//console.log("all hail the great course header.");

		var path = this.props.path || "";

		var courseid = this.props.courseid;
		var coursetopics = this.props.coursetopics;

		var rows = [];
		for (var i=0; i < coursetopics.length; i++){
			var topicid = coursetopics[i].id;
			var pathHeader = "/"+courseid+"/"+topicid;
			if (i==0){
				pathHeader = "/"+courseid;
			}
			rows.push(<li key={topicid} role="presentation" className={this.isActive(path,pathHeader,i) ? "active" : ""}><Link to={pathHeader}>{topics[topicid].name}</Link></li>);
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
