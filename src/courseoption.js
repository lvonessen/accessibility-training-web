import React from 'react';

import 'bootstrap';

class CourseOption extends React.Component {
	render() {

		// initial state
		// var check;
		// if (this.props.selected(this.props.course)){
		// 	check = (<input type="checkbox" change={() => this.props.update(this.props.course)} checked/>);
		// } else {
		// 	check = (<input type="checkbox" change={() => this.props.update(this.props.course)}/>);
		// }

		// return
		return (
			<span>
			<label>
				<input type="checkbox" onClick={() => this.props.update(this.props.course)}/>
				{this.props.name}
			</label>
			<br />
			</span>

		)
	}
}

export { CourseOption };
