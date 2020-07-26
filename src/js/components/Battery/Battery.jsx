import React from 'react';
import PropTypes from 'prop-types';

const Battery = (props) => {
  const { charge, capacity } = props;

  let fillState = Math.floor((100 / capacity) * charge);
  if (fillState >= 100) fillState = 100;

  return (
    <div className="Battery">
      <div className="Battery-charge">
        <div className="Battery-chargePercent">{fillState}%</div>
        <div className="Battery-chargeSpaceused">
          {Math.round((charge + Number.EPSILON) * 100) / 100}/{capacity}
        </div>
      </div>
      <div
        className="Battery-fillState"
        style={{
          width: `${fillState}%`,
        }}
      />
    </div>
  );
};

Battery.propTypes = {
  charge: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

Battery.defaultProps = {};

export default Battery;
