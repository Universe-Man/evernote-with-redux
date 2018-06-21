import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ADD_NOTEBOOK from '../actions/index.js'
import {addNotebook} from '../actions'

class App extends Component {

test = () => {
  // this.props.dispatch(ADD_NOTEBOOK) // { type: "", payload: {} }
  this.props.dispatch(addNotebook("The Notebook"))
  // USING A INPUT FIELD TO GET THE TITLE OF WHATEVER
  this.props.dispatch(addNotebook("The Notebook Returns"))
  this.props.dispatch(addNotebook("The Notebook Fights Back"))
  this.props.dispatch(addNotebook("The Notebook: The End"))
}

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.test}>TEST REDUX!!!</button>
      </div>
    );
  }
}

// super high!
export default connect()(App);
