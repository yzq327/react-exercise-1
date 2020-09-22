import React, { Component } from 'react';
import './App.scss';
import Hello from './components/Hello';
import About from './components/About';
import Education from './components/Education';


class App extends Component {
  render() {
    return (
      <main className="app">
        <Hello />
        <About />
        <Education />
      </main>
    );
  }
}

export default App;
