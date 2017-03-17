/* ------------------------------
 IMPORT
 ------------------------------ */
import React from 'react';
import ReactDOM from 'react-dom';

import Body from './todolist/Body';


function Contents() {
  return (
    <Body />
  );
}

ReactDOM.render(
  <Contents />,
  document.getElementById('container')
);
