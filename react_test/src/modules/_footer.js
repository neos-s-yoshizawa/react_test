import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        こんにちは、{this.props.userName}さん
      </footer>
    );
  }
}
