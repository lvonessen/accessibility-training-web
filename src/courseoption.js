import React from 'react';

import 'bootstrap';

class CourseOption extends React.Component {
	render() {
		
		return (
				<button type="button" onClick={() => this.props.update(this.props.course)}>{this.props.name}</button>
			
		)
	}
}

export { CourseOption };