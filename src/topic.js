import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import { LOTile }  from './lotile';

var topics = require('./topics');
var subtopics = require('./subtopics');

// Sort the publications by decreasing year.
/*pubs = pubs.slice(0).sort((a, b)=>{ 
	if(b["year"] !== a["year"])
		return b["year"] - a["year"]; 
	else
		return a["source"].localeCompare(b["source"]); 
});*/

class Topic extends React.Component {

	render() {
		
		// assuming we were provided with topic, arg, and flavor
		var topic = topics['intro'];
		var arg = "Blah blah blah blah blah";
		var flavor = "default";
		
		// list of subtopic names
		var subtopicset = topic.flavormap[flavor];
		
		console.log(flavor);
		console.log(subtopicset);

		// Create a list of publications, inserting year headers.
		var rows = [];
		console.log(subtopicset.length);
		for (var i = 0; i < subtopicset.length; i++) {
			
			var subtopicid = subtopicset[i];
			console.log(subtopicid);
			var subtopic = subtopics[subtopicid];
			console.log(subtopic);
			
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