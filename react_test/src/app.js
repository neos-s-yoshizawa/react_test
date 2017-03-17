import React from 'react';
import ReactDOM from 'react-dom';

import { config } from './config';

import Header from './modules/_header';
import Footer from './modules/_footer';
import Todo from './todolist/Todo';

function Contents() {
  return (
    <article>
      <Header />
      <Todo />
      <Footer />
    </article>
  );
}

ReactDOM.render(
  <Contents />,
  document.getElementById('container')
);
