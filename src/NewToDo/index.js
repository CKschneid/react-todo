import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import styled from 'styled-components';

const NewToDoContainer = styled.div`
  width: 80%;
  margin: 1em auto;
`;

const Input = styled.input`
  width: 60%;
  padding: 1em 0.5em;
  background-color: #fdfcf7;
  border: 1.5px solid cadetblue;
`;

const Button = styled.button`
  width: 30%;
  margin-left: 3%;
  padding: 1em 0em;
  cursor: pointer;
  background-color: Cornsilk;
  color: CadetBlue;
  border: 1.5px solid CadetBlue;

  &:hover {
    background-color: CadetBlue;
    border: none;
    color: white;
  }
`;

export default class NewToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ''
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
    this.setState({ newToDo: '' });
  }
  render() {
    return (
      <NewToDoContainer>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="ex. pay phone bill..."
            value={this.state.newToDo}
            onChange={this.handleChange}
          />
          <Button type="submit"> ADD </Button>
        </form>
      </NewToDoContainer>
    );
  }
}

NewToDo.propTypes = {
  addToDo: PropTypes.func
};
