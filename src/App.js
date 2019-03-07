import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state={
    inputValue: ''
  }

totalLengthHandler = (event) => {
this.setState({inputValue: event.target.value});
}

deleteCharHandler = (index) => {
  const text = this.state.inputValue.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState({inputValue :updatedText});
}

  render() {
    const charList = this.state.inputValue.split('').map((ch,index) => {
      return <Char 
      character={ch} 
      key={index} 
      clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <h1>Im react App</h1>
        <input type="text"
        onChange={this.totalLengthHandler}
        value={this.state.inputValue}/>
        <Validation inputLength={this.state.inputValue.length}/>
        {charList}
      </div>
    );
  }
}

export default App;