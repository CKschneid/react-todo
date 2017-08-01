import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      newToDo: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.newToDo) {
      return;
    }
    this.props.addToDo(this.state.newToDo);
    this.setState({ newToDo: "" });
  }
  render() {
    return (
      <div className="newtodo">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="ex. pay phone bill..."
            value={this.state.newToDo}
            onChange={this.handleChange}
            className="newtodo--input"
          />
          <button type="submit" className="newtodo--button">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

NewToDo.propTypes = {
  addToDo: PropTypes.func
};
