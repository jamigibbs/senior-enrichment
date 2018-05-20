import React from 'react';

const Title = (props) => {
  return (
    <div id={props.id} className="page-title">
      <h1>{props.content}</h1>
    </div>
  )
}

export default Title;
