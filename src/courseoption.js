import React from 'react';

import 'bootstrap';

class CourseOption extends React.Component {

	constructor(props) {
      super(props);
      /* set the initial checkboxState to true */
      this.state = {
        checkboxState: this.props.selected(this.props.course)
      }
  }

	toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
		this.props.update(this.props.course)
  }

	onChange(event) {
		//super.onChange(event);
		// look I dunno why this threw an error
  }

	render() {

		const checkedOrNot = [];
    // checkedOrNot.push(
    //   <p>{this.state.checkboxState ? (<Link to={"/"+courseid}>Learn more about {coursename}</Link>) : ("") }</p>
    // );

		// return
		return (
			<span>
			<label>
				<input type="checkbox" onClick={this.toggle.bind(this)} checked={this.state.checkboxState} onChange={this.onChange.bind(this)}/>
				{this.props.name}
			</label>
			{checkedOrNot}
			<br />
			</span>

		)
	}
}

export { CourseOption };
