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

		
		
		var welcome = (<NestedList list={welcometext} id={"welcome_text"} key={"welcome_text"}/>)

		return (
			<div name="welcome" className="welcome ws-bottom">
				
				<h2>Welcome!</h2>
				{welcome}
			</div>
		)
	}

}

export {Intro};