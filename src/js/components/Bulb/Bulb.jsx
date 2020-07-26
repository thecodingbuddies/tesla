import React from 'react';
import PropTypes from 'prop-types';
import getRandomBetween from '../../logic/getRandomBetween';
import useInterval from '../../hooks/useInterval';

const Bulb = (props) => {
  const [active, setActive] = React.useState(() => {
    return false;
  });
  const timeout = React.useRef(null);

  const [breakInterval, setBreakInterval] = React.useState(() => {
    return getRandomBetween(props.breakInterval.min, props.breakInterval.max);
  });
  const isBroken = React.useRef(false);
  useInterval(() => {
    if (props.canBreak) {
      isBroken.current = true;
      setTimeout(() => {
        isBroken.current = false;
        setBreakInterval(
          getRandomBetween(props.breakInterval.min, props.breakInterval.max),
        );
      }, props.timeToRepair);
    }
  }, breakInterval);

  const handleClick = () => {
    if (isBroken.current === true) {
      return;
    }

    props.onClick();
    setActive(() => {
      return true;
    });
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setActive(() => {
        return false;
      });
    }, 250);
  };

  return (
    <button
      type="button"
      className={`Bulb ${active ? 'is-active' : ''}`}
      onClick={handleClick}
    >
      <span className="Bulb-center" />
      <span className="Bulb-filament Bulb-filament--1" />
      <span className="Bulb-filament Bulb-filament--2" />
      <span className="Bulb-reflections">
        <span />
      </span>
      <span className="Bulb-sparks">
        <i className="Bulb-spark Bulb-spark--1" />
        <i className="Bulb-spark Bulb-spark--2" />
        <i className="Bulb-spark Bulb-spark--3" />
        <i className="Bulb-spark Bulb-spark--4" />
      </span>
    </button>
  );
};

Bulb.propTypes = {
  onClick: PropTypes.func,
  canBreak: PropTypes.bool,
  breakInterval: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  timeToRepair: PropTypes.number,
};

Bulb.defaultProps = {
  onClick: () => {
    return null;
  },
  breakInterval: {
    min: -1,
    max: -1,
  },
  timeToRepair: 0,
  canBreak: false,
};

export default Bulb;
