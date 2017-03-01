import React from 'react';
import ReactDOM from 'react-dom';

import Header from './_header.jsx';
import Body from './_body.jsx';
import Footer from './_footer.jsx';

import Todo from './todolist/Todo.jsx';

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
