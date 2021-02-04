import React, { useState } from "react";
import PropTypes from "prop-types";
import StepProgress from "../StepProgress";

import "./Steps.css";

const propTypes = {
  onDone: PropTypes.func,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  doneLabel: PropTypes.string,
  hasDoneButton: PropTypes.bool,
  children: PropTypes.any,
};

function Steps(props) {
  const {
    onDone = () => {},
    previousLabel = "Previous",
    nextLabel = "Next",
    doneLabel = "Done",
    hasDoneButton = true,
    children,
  } = props;

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  if (!children) {
    return null;
  }

  let stepsChildren;

  if (Array.isArray(children)) {
    stepsChildren = children;
  } else {
    stepsChildren = [children];
  }

  const stepLabels = [];
  const firstStep = 0;
  const lastStep = stepsChildren.length - 1;
  const totalSteps = stepsChildren.length;

  stepsChildren.forEach((element) => {
    let label = "";
    if (React.isValidElement(element)) {
      const { title } = element.props;
      if (title) {
        label = title;
      }
    }
    stepLabels.push(label);
  });

  return (
    <div className="steps">
      {totalSteps > 1 && (
        <StepProgress
          stepLabels={stepLabels}
          activeStep={activeStepIndex}
          totalSteps={totalSteps}
        />
      )}
      <div className="steps-content">{stepsChildren[activeStepIndex]}</div>
      <div className="steps-actions">
        {totalSteps > 1 && activeStepIndex !== lastStep && (
          <button
            className="primary"
            onClick={() => setActiveStepIndex(activeStepIndex + 1)}
          >
            {nextLabel}
          </button>
        )}
        {activeStepIndex === lastStep && hasDoneButton && (
          <button className="primary" onClick={onDone}>
            {doneLabel}
          </button>
        )}
        {totalSteps > 1 && activeStepIndex !== firstStep && (
          <button
            className="secondary"
            onClick={() => setActiveStepIndex(activeStepIndex - 1)}
          >
            {previousLabel}
          </button>
        )}
      </div>
    </div>
  );
}

Steps.propTypes = propTypes;

export default Steps;
