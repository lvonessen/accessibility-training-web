import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import { LOTile }  from './lotile';

var subtopics = require('./json/subtopics');
var topics = require('./json/topics');

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
		// json
		var topic = topics[this.props.id];
		var arg = this.props.arg;
		var flavor = this.props.flavor;

		// list of subtopic names
		var subtopicset = topic.flavormap[flavor];

		//console.log(flavor);
		//console.log(subtopicset);

		// Create a list of subtopics
		var subtopiclist = [];
		//console.log(subtopicset.length);
		for (var i = 0; i < subtopicset.length; i++) {

			var subtopicid = subtopicset[i];
			//console.log(subtopicid);
			var subtopic = subtopics[subtopicid];
			//console.log(subtopic);

			subtopiclist.push(<LOTile {...subtopic} id={subtopicid} key={subtopicid} />);
		}
		return (
			<div>
				<h2 name={topic.id}>{topic.name}</h2>
				<p> {arg} </p>
				<div>{subtopiclist}</div>
			</div>
		);

	}
}

export { Topic };
