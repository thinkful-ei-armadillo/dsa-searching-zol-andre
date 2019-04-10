import React, { Component } from 'react';
import { array, sortedArray, searchLinear, searchBinary } from './components/search'
import './App.css';

class App extends Component {
  state = {
    binaryRes: '',
    linearRes: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { value } = e.target;
    console.log(value.value)
    console.log('array', array);
    console.log('sorted', sortedArray);
    let linearRes = searchLinear(array, Number(value.value));
    let binaryRes = searchBinary(sortedArray, Number(value.value));
    this.setState({binaryRes, linearRes})
  }


  render() {
    return (
      <div className="App">
         <form className="search-form" onSubmit={this.handleSubmit}>
            <input type="number" name="value" placeholder="linear search" required/>
            <button type="submit">Search</button>
         </form>

         <div>
           <p>Linear search: {this.state.linearRes}</p>
           <p>Binary search: {this.state.binaryRes}</p>
         </div>
      </div>
    );
  }
}

export default App;
