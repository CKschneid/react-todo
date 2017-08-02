import React, { Component } from 'react';
import NewToDo from './Components/NewToDo';
import FilterSelection from './Components/FilterSelection';
import ToDoList from './Components/ToDoList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const ToDoAppContainer = styled.div`
  width: 50%;
  margin: 20px auto;
`;

const ToDoApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: 'read book', completed: true },
        { text: 'go to store', completed: false },
        { text: 'exercise', completed: false }
      ],
      filter: 'all'
    };

    this.addToDo = this.addToDo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
  }
  addToDo(text) {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false
        }
      ]
    });
  }

  toggleToDo(todoItem: Object) {
    const todos = this.state.todos.map((todo, index) => {
      if (todo === todoItem) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({ ...this.state, todos });
  }
  handleFilterChange(filter) {
    this.setState({
      ...this.state,
      filter
    });
  }
  render() {
    const RouteComponent = ({ match }) => {
      console.log(match.params);
      const filter = match.params.filter || 'all';
      return (
        <ToDoApp>
          <NewToDo addToDo={this.addToDo} />
          <FilterSelection currentFilter={filter} />
          <ToDoList
            todos={this.state.todos}
            handleToggle={this.toggleToDo}
            filter={filter}
            renderText={text => {
              return (
                <b>
                  {text}
                </b>
              );
            }}
          />
        </ToDoApp>
      );
    };
    return (
      <Router>
        <ToDoAppContainer>
          <Route path="/:filter?" component={RouteComponent} />
        </ToDoAppContainer>
      </Router>
    );
  }
}

export default App;
