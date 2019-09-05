import React from "react";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }
  render() {
    return(
      <div className= 'my-form'>
        <h1>This is the form</h1>
      </div>
    );
  }
}

export default MyForm;