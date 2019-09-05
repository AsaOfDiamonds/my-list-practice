import React, { Component } from 'react';
import MyList from "./components/MyList";
import MyForm from "./components/MyForm";
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

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  }

  render() {
    console.log(this.state);
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my list</h1>
      </header>
      <MyList list={this.state.list}/>
      <MyForm addItem={this.addItem}/>
    </div>
  );
  }
}

export default App;
