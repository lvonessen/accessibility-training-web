import React from 'react';
import { Link } from 'react-router-dom';
import { ContactInfo } from './contact';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>
				{/* <ContactInfo/> */}
				<h1>Accessibility Curriculum Resources</h1>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Introduction</Link></li>
							<li role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Choose your courses</Link></li>
							<li role="presentation" className={path.startsWith("/impact") ? "active" : ""}><Link to="/webdev">Web Dev</Link></li>
							<li role="presentation" className={path.startsWith("/students") ? "active" : ""}><Link to="/slides">Get your slides</Link></li>
							{/*<li role="presentation"><a href="https://medium.com/bits-and-behavior" target='_blank'>Blog</a></li>*/}
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };