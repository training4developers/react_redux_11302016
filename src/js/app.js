import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore } from 'redux';

const actionTypes = keyMirror({
	INCREMENT: null,
	DECREMENT: null
});

const createIncrementAction = amt => ({ type: actionTypes.INCREMENT, amt });
const createDecrementAction = amt => ({ type: actionTypes.DECREMENT, amt });

// const createStore = (reducerFn) => {

// 	let currentState = undefined;
// 	const callbackFns = [];

// 	currentState = reducerFn(currentState);

// 	return {
// 		dispatch: (action) => {
// 			currentState = reducerFn(currentState, action);
// 			callbackFns.forEach(callbackFn => callbackFn());
// 		},
// 		subscribe: (componentCallbackFn) => {
// 			callbackFns.push(componentCallbackFn);
// 		},
// 		getState: () => currentState
// 	};

// };

const reducer = (state = 0, action) => {

	console.log(state, action);

	switch (action.type) {
		case actionTypes.INCREMENT:
			return state + action.amt;
		case actionTypes.DECREMENT:
			return state - action.amt;
		default:
			return state;
	}

};

const store = createStore(reducer);

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(createIncrementAction(2));
// store.dispatch(createDecrementAction(1));
// store.dispatch(createIncrementAction(5));
// store.dispatch(createDecrementAction(3));
// store.dispatch(createIncrementAction(7));

export class Calculator extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentValue: 0
		};
	}

	componentDidMount() {
		this.props.store.subscribe(() => {
			this.setState({
				currentValue: this.props.store.getState()
			});
		});
	}

	increment = () => {
		this.props.store.dispatch(createIncrementAction(1));
	};
	
	decrement = () => {
		this.props.store.dispatch(createDecrementAction(1));
	};

	render() {
		return <div>
			<span>Current Value: {this.state.currentValue}</span>
			<button type="button" onClick={this.increment}>Increment</button>
			<button type="button" onClick={this.decrement}>Decrement</button>
		</div>;
	}

}

ReactDOM.render(<Calculator store={store} />,
	document.querySelector('my-app'));