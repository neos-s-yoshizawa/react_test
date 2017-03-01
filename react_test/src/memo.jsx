import React from 'react';

export default class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.memolist = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value: this.state.value});
    this.memolist.push(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    const memolist = this.memolist;
    const memo = memolist.map((memolist, index) =>
      <li key={index}>
        <label>
          <input type="checkbox" />{memolist}
        </label>
      </li>
    );
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="メモする" />
        </form>
        <ul>
          {memo}
        </ul>
      </div>
    );
  }
}
