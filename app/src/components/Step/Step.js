import React from "react";
import PropTypes from "prop-types";

import "./Step.css";

const propTypes = {
  children: PropTypes.node,
};

function Step(props) {
  const { children } = props;
  if (!children) {
    return null;
  }
  return <div className="step">{children}</div>;
}

Step.propTypes = propTypes;

export default Step;
