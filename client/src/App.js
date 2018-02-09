import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Saved from './components/Saved';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <Header />
          <Search />
          <Results />
          <Saved />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
