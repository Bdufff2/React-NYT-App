import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Saved from './components/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Search />
        <Results />
        <Saved />

      </div>
    );
  }
}

export default App;
