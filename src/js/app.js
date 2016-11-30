import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

	render() {
		

		//console.log(Object.isFrozen(this.props));
		//this.props.toolHeader = 'New Tool Header';
		//this.props.almostTimeForLunch = true;

		return <div>
			<header>
				<h1>{this.props.toolHeader}</h1>
			</header>
			<ul>
				{this.props.colors.map(color => <li>{color}</li>)}
			</ul>
		</div>;
	}
}

const colorList = ['red!','gold','green','white','black','blue','saffron'];

ReactDOM.render(<ColorTool colors={colorList} toolHeader="Color List!!!" />, document.querySelector('my-app'));


