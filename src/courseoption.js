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

		// initial state
		var check;
		if (this.state.checkboxState){
			check = (<input type="checkbox" onClick={() => this.props.update(this.props.course)} checked/>);
		} else {
			check = (<input type="checkbox" onClick={() => this.props.update(this.props.course)}/>);
		}

		// return
		return (
			<span>
			<label>
				<input type="checkbox" onClick={this.toggle.bind(this)} checked={this.state.checkboxState} onChange={this.onChange.bind(this)}/>
				{this.props.name}
			</label>
			<br />
			</span>

		)
	}
}

export { CourseOption };
