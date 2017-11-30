import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import { LOTile }  from './lotile';

var subtopics = require('./subtopics');
var topics = require('./topics');
var courses = require('./courses');

// Sort the publications by decreasing year.
/*pubs = pubs.slice(0).sort((a, b)=>{ 
	if(b["year"] !== a["year"])
		return b["year"] - a["year"]; 
	else
		return a["source"].localeCompare(b["source"]); 
});*/

class Topic extends React.Component {

	render() {
		
		var courseid = this.props.courseid;
		var topic = topics[this.props.id];
		var arg = this.props.arg;
		var flavor = this.props.flavor;
		
		// list of subtopic names
		var subtopicset = topic.flavormap[flavor];
		
		//console.log(flavor);
		//console.log(subtopicset);

		// Create a list of subtopics
		var rows = [];
		console.log(subtopicset.length);
		for (var i = 0; i < subtopicset.length; i++) {
			
			var subtopicid = subtopicset[i];
			//console.log(subtopicid);
			var subtopic = subtopics[subtopicid];
			//console.log(subtopic);
			
			rows.push(<LOTile {...subtopic} id={subtopicid} key={subtopicid} />);
		}
		return (
			<div>
				<h2 name={topic.id}>{topic.name}</h2>
				<p> {arg} </p>
				<div>{rows}</div>
			</div>
		);
			
	}
}

export { Topic };