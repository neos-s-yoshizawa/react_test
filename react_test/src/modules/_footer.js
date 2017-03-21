import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        こんにちは、{this.props.userData.name}({this.props.userData.email})さん
      </footer>
    );
  }
}
