import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

export class WidgetTool extends Component {

	render() {
		return <div className="">Widget Tool</div>;
	}

}

ReactDOM.render(<WidgetTool />, document.querySelector('my-app'));




