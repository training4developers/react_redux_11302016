import keyMirror from 'key-mirror';

const actionTypes = keyMirror({
	INCREMENT: null,
	DECREMENT: null
});

console.dir(actionTypes);

const createIncrementAction = amt => ({ type: actionTypes.INCREMENT, amt });
const createDecrementAction = amt => ({ type: actionTypes.DECREMENT, amt });


const actions = [
	createIncrementAction(2),
	createDecrementAction(1),
	createIncrementAction(5),
	createDecrementAction(3),
	createIncrementAction(7),
];

const reducer = (state, action) => {

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

console.log(actions.reduce(reducer, 0));