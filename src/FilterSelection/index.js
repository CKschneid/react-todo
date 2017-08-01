import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Link } from "react-router-dom";

const ITEMS = ["all", "active", "completed"];

export default class FilterSelection extends Component {
  render() {
    return (
      <div className="filter">
        {ITEMS.map((filter, index) =>
          <Link key={filter} to={`/${filter == "all" ? "" : filter}`}>
            <button
              className={`filter--button ${filter == this.props.currentFilter
                ? "active"
                : "inactive"}`}
            >
              {filter}
            </button>
          </Link>
        )}
      </div>
    );
  }
}

FilterSelection.propTypes = {
  currentFilter: PropTypes.string
};
