import React from 'react';
import { Link } from 'react-router-dom';
import { NestedList } from './nestedlist';

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
		
		var material = (<NestedList list={this.props.material} id={this.props.id+"_material"} key={this.props.id+"_material"}/>)
		
		var options = (<NestedList list={this.props.options} id={this.props.id+"_options"} key={this.props.id+"_options"}/>)
		//this.listToHtml(this.props.options,[]);
		
		var blah = "<ul> <li> Hi </li> </ul>";
			
		// return things:
		{/* [
	{
		"id": "lo_what",
		"name": "Accessibility is about designing to take into account all kinds of abilities",
		"arg": "This is important because...",
		"material": [ "point 1", "point 2", ["subpoint1", "subpoint2"], "point 3" ],
		"options": [ "brief", "indepth", "activity" ]
	}
]  */}

		return (
			<div name={ this.props.name } className="lotile ws-bottom">
				
				<h3>{this.props.name }</h3>
				<p> {this.props.arg } </p>
				<div>{material}</div>
				<div>
				<h4> How do you want to teach this topic? </h4>
				{options}
				</div>
			</div>
		)
	}

}

export {LOTile};