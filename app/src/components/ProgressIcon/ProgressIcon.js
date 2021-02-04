import React from "react";
import PropTypes from "prop-types";

import "./ProgressIcon.css";

const propTypes = {
  number: PropTypes.number,
  active: PropTypes.bool,
  complete: PropTypes.bool,
};

function ProgressIcon(props) {
  const { number, active = false, complete = false } = props;

  if (active) {
    return (
      <i className="progress-icon active">
        <span className="fa-stack">
          <span className="fas fa-circle fa-stack-1x" />
          <span className="progress-icon-number fa-stack-1x">{number}</span>
        </span>
      </i>
    );
  }

  if (complete) {
    return (
      <i className="progress-icon complete">
        <span className="far fa-check-circle"></span>
      </i>
    );
  }

  if (!complete && !active) {
    return (
      <i className="progress-icon not-complete">
        <span className="fa-stack">
          <span className="far fa-circle fa-stack-1x" />
          <span className="progress-icon-number fa-stack-1x">{number}</span>
        </span>
      </i>
    );
  }
}

ProgressIcon.propTypes = propTypes;

export default ProgressIcon;
