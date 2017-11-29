// inspired by code at http://lyndseyb.co.uk/posts/creating-a-nested-listview-using-react
import React from 'react';

// pass in (potentially nested) list and key
class NestedListOld extends React.Component {	
	render() {		
		var rows = [];
			for (var i=0; i < this.props.list.length; i++){
				rows.push (<Node list={this.props.list[i]} key={this.props.key.concat(i)}/>);
			}
			return (<ul>{rows}</ul>);
	}
}

// pass in (potentially nested) list AND id AND set key (can't read key from down here)
// weird behavior if top level passes in a string
class NestedList extends React.Component {
	
	render() {
		if (typeof this.props.list === 'string' ){
			console.log(this.props.id);
			return (<li key={this.props.id}> {this.props.list} </li>);
		} else {			
			var rows = [];
			for (var i=0; i < this.props.list.length; i++){
				console.log(this.props.id.concat(i));
				rows.push (<NestedList list={this.props.list[i]} id={this.props.id.concat(i)} key={this.props.id.concat(i)}/>);
			}
			return (
						<ul>{rows}</ul>
			);
		}
	}
}

export { NestedList };