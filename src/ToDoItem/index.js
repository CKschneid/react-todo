import React, { Component } from "react";
import PropTypes from "prop-types";
import cleanProps from "../cleanProps";
import join from "../join";
import "./index.css";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event: SyntheticMouseEvent) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    if (this.props.onToggle) {
      this.props.onToggle(this.props.todo);
    }
  }
  render() {
    const { todo: { text, completed }, onToggle } = this.props;
    const domProps = cleanProps(this.props, ToDoItem);

    const path = completed
      ? <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      : <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />;

    const icon = (
      <svg
        fill="CadetBlue"
        height="30"
        width="30"
        viewBox="0 0 24 24"
        className="todoitem-icon"
      >
        {path}
      </svg>
    );

    const className = join(
      "todoitem",
      completed && "todoitem--completed",
      this.props.className
    );

    const label = this.props.renderText ? this.props.renderText(text) : text;
    return (
      <div {...domProps} onClick={this.handleClick} className={className}>
        {icon}
        <span
          className="todoitem-text"
          style={completed ? { textDecoration: "line-through" } : null}
        >
          {label}
        </span>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  renderText: PropTypes.func,
  todo: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  onToggle: PropTypes.func
};
