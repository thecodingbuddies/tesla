import React from 'react';
import PropTypes from 'prop-types';

import FlashIcon from '../../../images/flash.svg';

const Upgrade = (props) => {
  return (
    <div className="Upgrade">
      <div className="Upgrade-info">
        <h3 className="Upgrade-name">{props.name}</h3>
        <div className="Upgrade-cost">
          <FlashIcon className="Upgrade-costIcon" />
          {props.cost}
        </div>
        {props.description && (
          <p className="Upgrade-description">{props.description}</p>
        )}
      </div>
      <button type="button" className="Upgrade-button" onClick={props.onBuy}>
        <span className="Upgrade-buttonShadow" />
        <span className="Upgrade-buttonText">Buy</span>
      </button>
    </div>
  );
};

Upgrade.propTypes = {
  cost: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onBuy: PropTypes.func,
};

Upgrade.defaultProps = {
  description: '',
  onBuy: () => {
    return null;
  },
};

export default Upgrade;
