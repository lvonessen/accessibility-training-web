import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Interweave from 'interweave';

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

		var courseId = this.props.courseId;
		// json
		var topic = topics[this.props.id];
		var arg = this.props.arg;

		var argDom = "";
		if (arg.startsWith("<")){
			argDom = (<Interweave tagName="span" content={arg}/>);
		}else{
			argDom = (<p>{arg}</p>);
		}

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
				<h2 name={topic.id}>{/*topic.name*/this.props.courseName}</h2>
				{argDom}
				<div>{subtopiclist}</div>
			</div>
		);

	}
}

export { Topic };
