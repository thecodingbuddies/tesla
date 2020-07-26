import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from '../../../images/arrow-down.svg';

const UpgradeGroup = (props) => {
  const [open, setOpen] = React.useState(() => {
    return false;
  });

  return (
    <div className={`UpgradeGroup ${open ? 'is-open' : ''}`}>
      <div className="UpgradeGroup-top">
        <div className="UpgradeGroup-title">{props.title}</div>
        <button
          type="button"
          className="UpgradeGroup-button"
          onClick={() => {
            setOpen(() => {
              return !open;
            });
          }}
        >
          <ArrowDownIcon />
        </button>
      </div>
      <div className="UpgradeGroup-content">{props.children}</div>
    </div>
  );
};

UpgradeGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

UpgradeGroup.defaultProps = {};

export default UpgradeGroup;
