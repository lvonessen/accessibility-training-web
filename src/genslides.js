import React from 'react';
import { Link } from 'react-router-dom';
import { NestedList } from './nestedlist';

class GenSlides extends React.Component {

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

		// for sourcing a file: { this.props.id ? <img className='img-responsive img-thumbnail gap-bottom-right' alt={this.props.name} src={"/ajko/images/mug-" + this.props.id + ".jpg"} style={{width: 140}} /> : null }

		// Which means I have no idea how to make this all work out.
		// Note that ajko's website is literally http://faculty.washington.edu/ajko/?
		// Wait, we'll be having everything relative anyway since this will all be on Saba's computer.
		// Not that I'm convinced that helps...
		// Welp, probably just try "/slides/intro.pptx"

		return (
			<div name="welcome" className="welcome ws-bottom">

				<h2>Get Course Materials</h2>
				<p> As the final step of this tool, here are some slides to use, edit, or cull individual slides from: </p>
				<ul >

					<li key="intro_pptx" role="presentation" className=""><a href="/slides/intro.pptx">Intro to Accessibility.pptx</a></li>
					<li key="intro_pdf" role="presentation" className="active"><a href="/slides/intro.pdf">Intro to Accessibility.pdf</a></li>

				</ul>
			</div>
		)
	}

}

export {GenSlides};
