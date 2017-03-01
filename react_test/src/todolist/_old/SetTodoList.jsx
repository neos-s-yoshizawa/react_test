import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

export default class SetTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.getTodo = this.getTodo.bind(this);
  }

  getTodo(value) {
    console.log('value: ' + value);
    this.setState({todo: value});
  }

  render() {
    return (
      <div>
        <TodoForm getTodo={this.getTodo} />
        <TodoList />
      </div>
    );
  }
}
