import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			newColor: '',
			colors: props.colors.concat()
		};

		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.onClick();
	}

	onClick() {
		this.setState({
			colors: this.state.colors.concat(this.state.newColor)
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
				{this.state.colors.map(color => <li>{color}</li>)}
			</ul>
			<form>
				<label htmlFor="new-color">New Color:</label>
				<input type="text" id="new-color" name="newColor" onChange={this.onChange} value={this.state.newColor} />
				<button type="button" onClick={this.onClick} className="btn btn-primary">Add Color</button>
			</form>
		</div>;
	}
}

ColorTool.defaultProps = {
	toolHeader: 'Color List',
	colors: []
};

ColorTool.propTypes = {
	toolHeader: React.PropTypes.string.isRequired,
	colors: React.PropTypes.array
};

const colorList = ['red!','gold','green','white','black','blue','saffron'];

ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('my-app'));


