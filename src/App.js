import React, { Component } from 'react';
import MyList from "./components/MyList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          name: 'Compassion',
          id: 111,
          completed: false
        },
        {
          name: 'Humor',
          id: 112,
          completed: false
        },
        {
          name: 'Wants to have picture taken',
          id: 113,
          completed: false
        },
      ]

    }
  }
  render() {
    console.log(this.state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my list</h1>
      </header>
      <MyList />
    </div>
  );
  }
}

export default App;
