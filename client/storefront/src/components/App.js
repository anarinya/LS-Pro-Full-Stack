import React, { Component } from 'react';
import { NewProduct } from './';

class App extends Component {
  render() {
    return (
      <div className="App">
       Welcome to store management :)
       <NewProduct />
      </div>
    );
  }
}

export default App;
