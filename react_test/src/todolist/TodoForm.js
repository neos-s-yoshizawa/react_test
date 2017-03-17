import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.getForm = this.getForm.bind(this);
  }
  getForm() {
    event.preventDefault();
    if(this.refs.todo.value != '') {
      this.props.setTodo(this.refs.todo.value);
      this.refs.todo.value = '';
    }
  }
  render() {
    return (
      <div className="todo-form">
        <form className="new-todo-input-form" onSubmit={this.getForm}>
          <label>
            <input type="text" placeholder="Todo" ref="todo" />
          </label>
          <input type="submit" value="&#x25EF;" />
        </form>
        <div>
          <a href="#" onClick={this.props.changeAllTodo} data-changeType="clear">All Clear</a>
          <a href="#" onClick={this.props.changeAllTodo} data-changeType="done">All Done</a>
          <a href="#" onClick={this.props.changeAllTodo} data-changeType="undone">All UnDone</a>
        </div>
      </div>
    );
  }
}
