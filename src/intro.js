import React from 'react';
import { Link } from 'react-router-dom';
import { NestedList } from './nestedlist';

class Intro extends React.Component {

	// if it's a string, wrap it as a list element
	// if it's a list, wrap its elements in a list
	/*listToHtml(list,rows) {
		if (typeof list === 'string' ){
			rows.push(<li> {list} </li>);
		} else {
			var listLen = list.length;
			rows.push((<ul>));
			for (var i = 0; i < listLen; i++) {
				this.listToHtml(list[i],rows);
			}
			rows.push((</ul>));
			return rows;
		}
	}*/

	render() {

		var welcometext = ["Our goal is to streamline the process of incorporating accessibility into your classes",
		"Challenges you mentioned in a survey:",
		["Don’t feel expert enough",
		"Don’t have time/aren’t sure how to become experts"],
		"Don’t have time in class to cover more topics",
		"Worry not! We can",
		["Teach you topics customized to your course area",
		"Provide slides for you to interleave with your own or use as stand-alone lecture segments"],
		"Not sure you have enough time to go through the whole process now? Try a 5-minute chunk and email yourself a summary of what you’ve done so far and a link that will bring you back to exactly where you left off!"];

		var goaltext = ["Collecting accessibility knowledge all in one place",
		"Personalizing it to specific course(s)", "Providing starter lecture materials to make it easier to incorporate accessibility a slide or slide deck at a time"];

		var overviewtext = ["You pick out your course(s)","You explore a course's accessibility topics and save subtopics for later","At the end you get a slide deck tailored to your choices (not yet implemented)"];


				var goals = (<NestedList list={goaltext} id={"goaltext"} key={"goaltext"}/>);

		var welcome = (<NestedList list={welcometext} id={"welcome_text"} key={"welcome_text"}/>);


		var overview = (<NestedList list={overviewtext} id={"overviewtext"} key={"overviewtext"}/>);

		return (
			<div name="welcome" className="welcome ws-bottom">

				<h2>Overview</h2>
				<p>
				Companies in industry, like Google, Facebook, Microsoft, and Adobe, to name just a few, need not just more accessibility experts but also way more people who know even a little about accessibility.
				Due to legal scrutiny, corporate policies, and user expectations, this trend will only continue.
				One of the most straight-forward ways to increase the number of people with knowledge of accessibility is to incorporate it into existing computer science courses.
				</p><p>
				This tool is designed to make that easier for you by presenting accessibility topics in a way that is specifically tailored to your course(s). The goal is to reduce the effort required to figure out how topics are relevant and how they fit into existing course topics. Please note that this is a prototype and is not intended to convey exhaustive topic coverage for any one course.
				{/*This tool is designed to present a subset of accessibility topics related to a specific course, to support faculty (you) in integrating them into computer science courses without needing to scour the internet for course-specific materials. Its main goals are:*/}
				</p>

				<p> The way it works: </p>
				{overview}

				<Link to="/coursechoice" className="start">Get started</Link>

				{/*{welcome}*/}
			</div>
		)
	}

}

export {Intro};
