import React from 'react';

import 'bootstrap';

class CourseOption extends React.Component {
	render() {

		return (

			// pass course *INDEX* into update to toggle selection
			<button type="button" onClick={() => this.props.update(this.props.course)} className={this.props.selected(this.props.course) ? "active" : ""}>{this.props.name}</button>

		)
	}
}

export { CourseOption };
