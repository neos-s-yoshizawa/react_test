import React from 'react';

export default class TodoList extends React.Component {
  render() {
    if(!this.props.todo) {
      return null;
    }

    const todolist = this.props.todo;
    const todo = todolist.map((todolist, index) =>
      <li key={index}>
        <label className={todolist.status ? 'checked' : ''}>
          <input type="checkbox" onChange={this.props.changeTodoState} data-todono={todolist.id} />{todolist.title}
        </label>
      </li>
    );
    return (
      <div>{todo}</div>
    );
  }
}
