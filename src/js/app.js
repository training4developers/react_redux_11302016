import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute } from 'react-router';

import 'bootstrap-loader';
import '../css/styles.scss';

import keyMirror from 'key-mirror';

export const actionTypes = keyMirror({
	REFRESH_WIDGETS_REQUEST: null,
	REFRESH_WIDGETS: null,
	INSERT_WIDGET_REQUEST: null,
});

export const createRefreshWidgetsRequestAction = () => ({
	type: actionTypes.REFRESH_WIDGETS_REQUEST,
	widgets: []
});

export const createRefreshWidgetsAction = widgets => ({
	type: actionTypes.REFRESH_WIDGETS,
	widgets
});

export const createInsertWidgetAction = () => ({
	type: actionTypes.INSERT_WIDGET_REQUEST
});

const refreshWidgets = () => {

	return dispatch => {

		dispatch(createRefreshWidgetsRequestAction());

		fetch('http://localhost:3010/widgets')
			.then(res => res.json())
			.then(results => {
				dispatch(createRefreshWidgetsAction(results));
			});

	};

};

const insertWidget = widget => {

	return dispatch => {

		dispatch(createInsertWidgetAction());

		fetch('http://localhost:3010/widgets', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			mode: 'cors',
			body: JSON.stringify(widget)
		})
			.then(() => fetch('http://localhost:3010/widgets'))
			.then(res => res.json())
			.then(results => {
				dispatch(createRefreshWidgetsAction(results));
			});

	};

};

export const reducer = (state = { loading: false, widgets: [] }, action) => {

	switch(action.type) {
		case actionTypes.REFRESH_WIDGETS_REQUEST:
			return Object.assign({}, state, { widgets: action.widgets, loading: true });
		case actionTypes.REFRESH_WIDGETS:
			return Object.assign({}, state, { widgets: action.widgets, loading: false });
		case actionTypes.INSERT_WIDGET_REQUEST:
			return Object.assign({}, state, { loading: true });
		default:
			return state;
	}

};

const store = createStore(reducer, applyMiddleware(thunk));

export class WidgetList extends Component {

	render() {

		console.dir(this);

		return <div>
			<div>Status: {this.props.loading ? 'Loading...' : 'Done'}</div>
			<ul>
				{this.props.widgets.map(widget => <li key={widget.id}>{widget.name}</li>)}
			</ul>
			<button type="button" className="btn btn-primary" onClick={this.props.refreshWidgets}>Refresh</button>
		</div>;	

	}

}

WidgetList.propTypes = {
	loading: PropTypes.bool,
	widgets: PropTypes.array,
	refreshWidgets: PropTypes.func
};

export class WidgetForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			widgetName: '',
			widgetDescription: '',
			widgetColor: '',
			widgetSize: '',
			widgetQuantity: 0,
		};
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	insertWidget = () => {

		this.props.insertWidget({
			name: this.state.widgetName,
			description: this.state.widgetDescription,
			color: this.state.widgetColor,
			size: this.state.widgetSize,
			quantity: this.state.widgetQuantity,
		});

		this.setState({
			widgetName: '',
			widgetDescription: '',
			widgetColor: '',
			widgetSize: '',
			widgetQuantity: '',
		});

		this.props.router.push('/');

	};

	render() {
		return <form>
			<div>
				<label>Name</label>
				<input type="text" id="widget-name" name="widgetName" onChange={this.onChange} value={this.state.widgetName} />
			</div>
			<button type="button" className="btn btn-primary" onClick={this.insertWidget}>Insert Widget</button>
		</form>;		
	}

}

WidgetForm.propTypes = {
	insertWidget: PropTypes.func,
	router: React.PropTypes.shape({
		push: React.PropTypes.func.isRequired
	}).isRequired
};

//<WidgetList loading={this.props.loading} widgets={this.props.widgets} refreshWidget={this.props.refreshWidgets} />
//<WidgetForm insertWidget={this.props.insertWidget} />

export class WidgetTool extends Component {


	render() {

		console.dir(this);
		
		return <div>

			<header>
				<h1>Widget Tool</h1>
			</header>

			<nav>
				<ul role="nav">
					<li><Link to="/" activeClassName="active">Home</Link></li>
					<li><Link to="/create" activeClassName="active">Create</Link></li>
				</ul>
			</nav>
			<div>
				{this.props.children}	
			</div>
		</div>;
	}

}

WidgetTool.propTypes = {
	loading: PropTypes.bool,
	widgets: PropTypes.array,
	refreshWidgets: PropTypes.func,
	insertWidget: PropTypes.func,
	children: PropTypes.any
};

const mapStateToProps = ({ widgets, loading }) => ({ widgets, loading });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ refreshWidgets, insertWidget }, dispatch);

const WidgetToolContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetTool);
const WidgetListContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetList);
const WidgetFormContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetForm);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={WidgetToolContainer}>
				<IndexRoute component={WidgetListContainer} />
				<Route path="/create" component={WidgetFormContainer} />
			</Route>
		</Router>
	</Provider>
, document.querySelector('my-app'));