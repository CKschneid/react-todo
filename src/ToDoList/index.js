import React, {Component} from 'react'
import ToDoItem from '../ToDoItem'
import PropTypes from 'prop-types'
import './index.css'

export default class ToDoList extends Component {
  constructor(props){
  	super(props)
    this.renderToDo = this.renderToDo.bind(this)
  }
  getVisibleTodos(todos, filterState){
    if (filterState == 'all') {
      return todos
    }
    return todos.filter(
      (todo, index) => {
        switch (filterState) {
          case 'active':
            return !todo.completed
          case 'completed':
            return todo.completed
        }
      }
    )
  }
  renderToDo(todo, index){
    return (
      <ToDoItem onToggle={this.props.handleToggle}
                key={index}
                todo={todo}
                renderText={this.props.renderText}
      />
    )
  }
  render(){
    const {todos, filter: filterState} = this.props

    const visibleToDos = this.getVisibleTodos(todos, filterState)

    return(
      <div className="todolist">
        {visibleToDos.map(this.renderToDo)}
      </div>
    )
  }
}

ToDoList.propTypes = {
  renderText: PropTypes.func,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      completed: PropTypes.bool
    })
  ),
  onToggle: PropTypes.func,
  filter:PropTypes.string
}
