import React from 'react';

export class ColorHeader extends React.Component {

	render() {

		return <header>
			<h1>{this.props.toolHeader}</h1>
		</header>;

	}
}

ColorHeader.propTypes = {
	toolHeader: React.PropTypes.string
};