// @flow
import React, { Component } from "react";
import "./App.css";
import NewToDo from "./NewToDo";
import FilterSelection from "./FilterSelection";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [
        { text: "read book", completed: true },
        { text: "go to store", completed: false },
        { text: "exercise", completed: false }
      ],
      filter: "all"
    };

    this.addToDo = this.addToDo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
  }
  addToDo(text: string) {
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
      const filter = match.params.filter || "all";
      return (
        <div className="todoapp">
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
        </div>
      );
    };
    return (
      <Router>
        <div className="app-container">
          <Route path="/:filter?" component={RouteComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
