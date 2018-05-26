import React from 'react';

const Scroll = (props) => {
  return (
    <div style= {{overflowY : 'scroll', border: '5px solid rgb(191, 226, 110)', height : '800px'}}>
    {props.children}
    </div>
  );
};

export default Scroll;
