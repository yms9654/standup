import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stand Up 앱을 만들어 봅시다.</h2>
        </header>
        <p className="App-intro">
          이제 여기서 부터 프로젝트는 시작입니다.
        </p>
      </div>
    );
  }
}

export default App;
