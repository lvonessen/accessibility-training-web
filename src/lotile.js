import React from 'react';
import { Link } from 'react-router-dom';
import { NestedList } from './nestedlist';
import Interweave from 'interweave';

class LOTile extends React.Component {

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

		// set-up things:
		var material;
		// the first option takes a nested array of strings and makes a nested bulleted listToHtml
		// the second takes a string of arbitrary html and performs some sanitations on it, then displays it
		if (this.props.material.constructor === Array) {
			material = (<NestedList list={this.props.material} id={this.props.id+"_material"} key={this.props.id+"_material"}/>)
		} else {
			material = (<Interweave tagName="div" content={""+this.props.material}/>)
		}

		var options = "";

		if (this.props.options!= undefined){
			options = (<NestedList list={this.props.options} id={this.props.id+"_options"} key={this.props.id+"_options"}/>)
		}

		var blah = "<ul> <li> Hi </li> </ul>";

		// structure of subtopic values:
		/*
			{
				"id": "lo_what",
				"name": "Accessibility is about designing to take into account all kinds of abilities",
				"arg": "This is important because...",
				"material": [ "point 1", "point 2", ["subpoint1", "subpoint2"], "point 3" ],
				"options": [ "brief", "indepth", "activity" ]
			}
		*/

		return (
			<div name={ this.props.name } className="lotile ws-bottom">

				<h3><Interweave tagName="span" content={this.props.name}/></h3>
				{/*<h3>{this.props.name }</h3>*/}
				<p> {this.props.arg } </p>
				<div>{material}</div>
			</div>
		)
	}

}

export {LOTile};
