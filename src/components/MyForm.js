import React from "react";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(event, this.state.item)
  }

  render() {
    return(
      <div className= 'my-form'>
        <h1>This is the form</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name= 'item'
            value={this.state.item}
            onChange={this.handleChanges}
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default MyForm;