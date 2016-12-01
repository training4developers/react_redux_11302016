import React from 'react';
import ReactDOM from 'react-dom';

class ColorEditListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = this.createState(props);
	}

	createState(props) {
		return {
			color: props.color
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('getting new props');
		console.dir(arguments);

		this.setState(this.createState(nextProps));
	}

	onChange = e => {
		this.setState({
			color: e.target.value
		});
	};

	render() {
		return <li>
			<input type="text" onChange={this.onChange} value={this.state.color} />
		</li>;
	}

}

ColorEditListItem.propTypes = {
	color: React.PropTypes.string
};

class ColorList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			colors: this.props.colors.concat()
		};
	}

	componentDidMount() {

		setTimeout(() => {
			this.setState({
				colors: this.state.colors.slice(1)
			});
		}, 3000);

	}

	render() {

		// no key, and the element is not mapped to the data which cause problems
		// for state values in child components
		// index key, is the same as no key, but the message goes away
		// key should be a unique value from the data, and causes the data to
		// to be linked to the element

		return <ul>
			{this.state.colors.map((color, index) => <ColorEditListItem key={index} color={color} />)}
		</ul>;

	}

}

ColorList.propTypes = {
	colors: React.PropTypes.array
};



const colorList = ['red','gold','green','white','black','blue','saffron'];

ReactDOM.render(<ColorList colors={colorList} />, document.querySelector('my-app'));




