import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
    this.todolist = [];
    this.getForm = this.getForm.bind(this);
    this.changeTodoState = this.changeTodoState.bind(this);
  }
  getForm(todo) {
    event.preventDefault();
    this.todolist.push({title: todo, status: 0});
    this.setState({todo: this.todolist});
  }
  changeTodoState(obj) {
    let todono = obj.target.getAttribute('data-todono');
    this.todolist[todono].status = this.todolist[todono].status ? 0 : 1;
    this.setState({todo: this.todolist});
  }
  render() {
    return (
      <div>
        <TodoForm getForm={this.getForm} />
        <TodoList todo={this.state.todo} changeTodoState={this.changeTodoState} />
      </div>
    );
  }
}
