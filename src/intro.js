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

		var overviewtext = ["You pick out the course(s) for which you want to find out if there’s an accessibility connection","Those get added to the header and you can explore them!",["We tried to pick out only relevant topics, and include some information about how they might be incorporated into that specific class"],"At the end you can download a custom slide deck which you can modify or take specific individual slides from to augment your own lectures if you so choose"];


				var goals = (<NestedList list={goaltext} id={"goaltext"} key={"goaltext"}/>);

		var welcome = (<NestedList list={welcometext} id={"welcome_text"} key={"welcome_text"}/>);


		var overview = (<NestedList list={overviewtext} id={"overviewtext"} key={"overviewtext"}/>);

		return (
			<div name="welcome" className="welcome ws-bottom">

				<h2>Overview</h2>
				<p> This tool is designed to present a subset of accessibility topics related to a specific course, to support faculty (you) in integrating them into computer science courses without needing to scour the internet for course-specific materials. Its main goals are: </p>
				{goals}

				<p> The way it works: </p>
				{overview}

				{/*{welcome}*/}
			</div>
		)
	}

}

export {Intro};
