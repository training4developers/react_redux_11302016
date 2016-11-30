import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			newColor: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {

		console.log('render');

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
			<form>
				<label htmlFor="new-color">New Color:</label>
				<input type="text" id="new-color" name="newColor" onChange={this.onChange} value={this.state.newColor} />
				<button type="button">Add Color</button>
			</form>
		</div>;
	}
}

const colorList = ['red!','gold','green','white','black','blue','saffron'];

ReactDOM.render(<ColorTool colors={colorList} toolHeader="Color List!!!" />, document.querySelector('my-app'));


