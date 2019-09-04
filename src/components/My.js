import React from "react";

const My = props => {
  return(
    <div className='my'>
      <h2>{props.item.name}</h2>
      <p>{props.item.id}</p>
    </div>
  );
}

export default My;