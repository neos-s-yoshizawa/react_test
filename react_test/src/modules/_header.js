import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Todo List</h1>
        <a className="logout-button" onClick={this.props.logout} href="#">ログアウト</a>
        <a className="nav-button" href="#"><i></i></a>
      </header>
    );
  }
}
