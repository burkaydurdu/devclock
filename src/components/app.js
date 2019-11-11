import { Component } from 'preact';
import Clock from './clock'

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
			 <Clock/>
			</div>
		);
	}
}
