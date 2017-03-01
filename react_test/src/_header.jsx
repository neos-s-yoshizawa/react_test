import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <button className="menu-button">≡</button>
      </header>
    );
  }
}
