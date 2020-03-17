import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
	logThisArr = () => {
		console.log('arrow : ', this);
	};
	logThisReg = function() {
		console.log('Reg : ', this);
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.logThisArr}>Log this Arr</button>
				{/* Arr : App {props: {…}, context: {…}, refs: {…}, updater: {…}, logThisArr: ƒ, …}*/}

				<button onClick={this.logThisReg}>Log this Reg</button>
				{/*Reg : undefined */}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
