import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ProgressIcon from "../ProgressIcon";

import "./StepProgress.css";

const propTypes = {
  stepLabels: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

function StepProgress(props) {
  const { stepLabels = [], activeStep = 0, totalSteps = 0 } = props;

  if (!totalSteps === 0) {
    return null;
  }

  const hasLabels = totalSteps === stepLabels.length;
  const items = new Array(totalSteps).fill(0);

  return (
    <div className="step-progress">
      {items.map((_, index) => {
        const key = `item-${index}`;
        let icon;
        // complete
        if (index < activeStep) {
          icon = <ProgressIcon complete />;
        }
        // active
        if (index === activeStep) {
          icon = <ProgressIcon number={index + 1} active />;
        }
        // not complete and not active
        if (index > activeStep) {
          icon = <ProgressIcon number={index + 1} />;
        }
        const stepProgressItemClasses = classnames("step-progress-item", {
          "first-item": index === 0,
          "last-item": index === items.length - 1,
        });
        const stepProgressLineClasses = classnames("step-progress-line", {
          complete: index < activeStep,
        });
        return (
          <div className={stepProgressItemClasses} key={key}>
            <div className="step-progress-icon">{icon}</div>
            {hasLabels && (
              <div className="step-progress-item-label">
                {stepLabels[index]}
              </div>
            )}
            <div className={stepProgressLineClasses} />
          </div>
        );
      })}
    </div>
  );
}

StepProgress.propTypes = propTypes;

export default StepProgress;
