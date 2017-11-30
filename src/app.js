import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Biography } from './bio';
import { Publications } from './publications';
import { Impact } from './impact';
import { Students } from './students';
import { Header } from './header';
import { Projects } from './projects';
import { Topic } from './topic';
import { Intro } from './intro';
import { Reading } from './reading';
import { Advice } from './advice';
import { Teaching } from './teaching';
import { Books } from './books';
import { Vita } from './cv';
import { CER } from './cer';
import { Unknown } from './unknown';

import 'bootstrap';

var webRoot = "/";

// Polyfill startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleCourseChange = this.handleCourseChange.bind(this);
		// eventually courses will start out empty
		this.state = {courses: ["webdev","class2"]};
	}
	
	handleCourseChange(newCourses) {
		this.setState({courses: newCourses});
	}	
	
	render() {
		
		var currentRoute = this.props.location.pathname;		
		
		return (
			<div className="container">
				{currentRoute === "/cv" ? null : <Header path={currentRoute} courses={this.state.courses}/>}
				<Switch>
					<Route exact path="/" component={Intro}/>
					{/* the course picking page will need to get passed in the course change function 
					<Route path="/proj" component={Projects}/>
					<Route path="/publications/:paper?" component={Publications}/>
					<Route path="/impact" component={Impact}/>
					<Route path="/reading" component={Reading}/>
					<Route path="/advice" component={Advice}/>
					<Route path="/teaching" component={Teaching}/>
					<Route path="/books" component={Books}/>
					<Route path="/students/:student?" component={Students}/>
					<Route path="/cv" component={Vita}/>
					<Route path="/cer" component={CER}/>
					{/* has to be at the end because it will match anything 
					<Route path="/:course?" component={Course}/>
					*/}
					{/* would have to be at the end because it will 
						 match anything, but course does instead */}
					<Route path="*" component={Unknown}/>
				</Switch>
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter basename={webRoot}>
		<Route path="/" component={App} />
	</BrowserRouter>
), document.getElementById('app'));
