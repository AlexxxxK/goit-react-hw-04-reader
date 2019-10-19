import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";

const Counter = ({ currentPage, length }) => (
  <p className={styles.counter}>
    {currentPage + 1}/{length}
  </p>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Counter;
