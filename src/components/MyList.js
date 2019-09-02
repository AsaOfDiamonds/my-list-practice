import React from "react";
import My from "./My";

const MyList = props => {
  return(
    <div className='my-list'>
    <h1>This is my List Component</h1>
      <My />
    </div>
  );
}

export default MyList;