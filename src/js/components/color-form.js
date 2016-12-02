import React from 'react';

import { EditComponent } from './edit-component';

export class ColorForm extends EditComponent { 

	constructor(props) {
		super(props);

		this.state = {
			newColor: ''
		};

		this.onClick = this.onClick.bind(this);
	}

	emitNewColor() {
		this.props.onNewColor(this.state.newColor);

		this.setState({
			newColor: ''
		});
	}

	onClick() {
		this.emitNewColor();
	}

	onKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			this.emitNewColor();
		}
	}

	componentDidMount() {
		this.newColorInput.focus();
	}

	render() {
		return <form>
			<label htmlFor="new-color">New Color:</label>
			<input type="text" id="new-color" name="newColor"
				onKeyDown={this.onKeyDown} onChange={this.onChange}
				ref={ (ukRocks => { this.newColorInput = ukRocks; }) } value={this.state.newColor} />
			<button type="button" onClick={this.onClick} className="btn btn-primary">Add Color</button>
		</form>;
	}
}