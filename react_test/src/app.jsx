import React from 'react';
import ReactDOM from 'react-dom';

import Header from './modules/_header.jsx';
import Footer from './modules/_footer.jsx';
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
