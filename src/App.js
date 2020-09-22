import React, { Component } from 'react';
import './App.scss';
import Hello from './components/Hello';
//import Infomation from './components/Infomation';


class App extends Component {
  render() {
    return (
      <main className="app">
        <Hello />
      
      </main>
    );
  }
}

export default App;
