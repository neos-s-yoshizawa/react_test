import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.changeTodoState = this.changeTodoState.bind(this);
  }
  changeTodoState(obj) {
    this.props.changeTodoState(obj);
  }
  render() {
    if(!this.props.todo) {
      return null;
    }

    const todolist = this.props.todo;
    const donelist = todolist.filter(function(item, index, array) {
      return (item.status==1);
    });
    const undonelist = todolist.filter(function(item, index, array) {
      return (item.status==0);
    });

    const todo = todolist.map((todolist, index) =>
      <li key={index}>
        <label className={todolist.status ? 'checked' : ''}>
          <input type="checkbox" onChange={this.changeTodoState} data-todono={index} />{todolist.title}
        </label>
      </li>
    );
    const done = donelist.map((donelist, index) =>
      <li key={index}>
        <label className={donelist.status ? 'checked' : ''}>
          <input type="checkbox" onChange={this.changeTodoState} data-todono={index} />{donelist.title}
        </label>
      </li>
    );
    const undone = undonelist.map((undonelist, index) =>
      <li key={index}>
        <label className={undonelist.status ? 'checked' : ''}>
          <input type="checkbox" onChange={this.changeTodoState} data-todono={index} />{undonelist.title}
        </label>
      </li>
    );

    return (
      <ul className="todo-list">
        {todo}
      </ul>
    );
  }
}
