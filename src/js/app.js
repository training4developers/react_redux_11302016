import React from 'react';
import ReactDOM from 'react-dom';

class ColorHeader extends React.Component {

	render() {

		return <header>
			<h1>{this.props.toolHeader}</h1>
		</header>;

	}
}

ColorHeader.propTypes = {
	toolHeader: React.PropTypes.string
};

const ColorList = props => <ul>
	{props.colors.map(color => <li>{color}</li>)}
</ul>;

ColorList.propTypes = {
	colors: React.PropTypes.array
};

class EditComponent extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
}

class ColorForm extends EditComponent { 

	constructor(props) {
		super(props);

		this.state = {
			newColor: ''
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.onNewColor(this.state.newColor);

		this.setState({
			newColor: ''
		});
	}

	render() {
		return <form>
			<label htmlFor="new-color">New Color:</label>
			<input type="text" id="new-color" name="newColor" onChange={this.onChange} value={this.state.newColor} />
			<button type="button" onClick={this.onClick} className="btn btn-primary">Add Color</button>
		</form>;
	}
}

class ColorTool extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			colors: props.colors.concat()
		};

		this.onNewColor = this.onNewColor.bind(this);
	}

	onNewColor(newColor) {
		this.setState({
			colors: this.state.colors.concat(newColor)
		});
	}

	render() {
		return <div>
			<ColorHeader toolHeader={this.props.toolHeader} />
			<ColorList colors={this.state.colors} />
			<ColorForm onNewColor={this.onNewColor} />
		</div>;
	}
}

ColorTool.defaultProps = {
	toolHeader: 'Color List!',
	colors: []
};

ColorTool.propTypes = {
	toolHeader: React.PropTypes.string.isRequired,
	colors: React.PropTypes.array
};

const colorList = ['red!','gold','green','white','black','blue','saffron'];

ReactDOM.render(<ColorTool colors={colorList} />, document.querySelector('my-app'));




