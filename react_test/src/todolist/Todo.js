/* ------------------------------
 IMPORT
 ------------------------------ */
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


/* ------------------------------
 GLOBAL VARIABLE
 ------------------------------ */

const UNDONE = 0;
const DONE = 1;


/* ------------------------------ */


function saveTodo(todolist) {
  localStorage.setItem('tododata', JSON.stringify(todolist));
}

function loadTodo() {
  if(localStorage.getItem('tododata')) {
    return JSON.parse(localStorage.getItem('tododata'));
  } else {
    return [];
  }
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    }
    this.todolist = loadTodo();
    this.setTodo = this.setTodo.bind(this);
    this.changeTodoState = this.changeTodoState.bind(this);
    this.changeAllTodo = this.changeAllTodo.bind(this);
  }

  setTodo(todo) {
    this.todolist.push({id: this.todolist.length, title: todo, status: UNDONE});
    this.setState({todo: this.todolist});
    saveTodo(this.todolist);
  }

  changeTodoState(obj) {
    let todono = obj.target.getAttribute('data-todono');
    this.todolist[todono].status = this.todolist[todono].status ? UNDONE : DONE;
    this.setState({todo: this.todolist});
    saveTodo(this.todolist);
  }

  changeAllTodo(obj) {
    switch (obj.target.getAttribute('data-changeType')) {
      case 'clear':
        this.todolist = [];
        break;
      case 'undone':
        this.todolist.map((todolist, index) => todolist.status = UNDONE);
        break;
      case 'done':
        this.todolist.map((todolist, index) => todolist.status = DONE);
        break;
      default:
        console.log(obj.target.getAttribute('data-changeType'));
        break;
    }
    this.setState({todo: this.todolist});
    saveTodo(this.todolist);
  }

  render() {
    const todolist = this.todolist;
    const donelist = todolist.filter(function(item, index, array) {
      return (item.status==DONE);
    });
    const undonelist = todolist.filter(function(item, index, array) {
      return (item.status==0);
    });

    return (
      <div>
        <TodoForm setTodo={this.setTodo} changeAllTodo={this.changeAllTodo} />
        <ul className="todo-list">
          <TodoList todo={undonelist} changeTodoState={this.changeTodoState} />
        </ul>
        <ul className="todo-list">
          <TodoList todo={donelist} changeTodoState={this.changeTodoState} />
        </ul>
      </div>
    );
  }
}
