import React from "react";
import PropTypes from "prop-types";
import styles from "./Controls.module.css";

const Controls = ({ currentPage, length, handlePublicationChange }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="prev"
      className={styles.button}
      onClick={handlePublicationChange}
      disabled={currentPage === 0}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      className={styles.button}
      onClick={handlePublicationChange}
      disabled={currentPage === length - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  handlePublicationChange: PropTypes.func.isRequired,
};

export default Controls;
