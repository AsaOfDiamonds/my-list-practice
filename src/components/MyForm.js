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

  render() {
    return(
      <div className= 'my-form'>
        <h1>This is the form</h1>
        <form>
          <input 
            type='text'
            name= 'item'
            value={this.state.item}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default MyForm;