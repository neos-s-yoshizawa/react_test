import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <a className="nav-button" href="#"><i></i></a>
      </header>
    );
  }
}
