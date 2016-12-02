import React from 'react';

import { ColorHeader } from './color-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			colors: props.colors.concat()
		};

		//this.onNewColor = this.onNewColor.bind(this);
	}

	// onNewColor(newColor) {
	// 	this.setState({
	// 		colors: this.state.colors.concat(newColor)
	// 	});
	// }

	onNewColor = (newColor) => {
		this.setState((nextState, props) => ({
			colors: nextState.colors.concat(newColor)
		}));
	};

	render() {
		return <div>
			<ColorHeader toolHeader={this.props.toolHeader} />
			<ColorList colors={this.state.colors} />
			<ColorForm onNewColor={this.onNewColor} />
		</div>;
	}
}

ColorTool.defaultProps = {
	toolHeader: 'Color List!!!!',
	colors: []
};

ColorTool.propTypes = {
	toolHeader: React.PropTypes.string.isRequired,
	colors: React.PropTypes.array
};