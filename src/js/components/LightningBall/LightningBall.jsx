import React from 'react';
import PropTypes from 'prop-types';

import FlashIcon from '../../../images/flash.svg';
import useInterval from '../../hooks/useInterval';
import getRandomBetween from '../../logic/getRandomBetween';

const LightningBall = (props) => {
  const [active, setActive] = React.useState(() => {
    return false;
  });
  const [randomPosition, setRandomPosition] = React.useState({
    rW: 0,
    rH: 0,
  });

  const handleClick = () => {
    props.onClick();
    setActive(() => {
      return true;
    });
    setTimeout(() => {
      setActive(() => {
        return false;
      });
    }, 3000);
  };

  useInterval(() => {
    setRandomPosition({
      rW: getRandomBetween(0, window.innerWidth - 90),
      rH: getRandomBetween(0, window.innerHeight - 90),
    });
  }, props.speed);

  return (
    <>
      <button
        type="button"
        className={`LightningBall ${active ? 'is-active' : ''}`}
        onMouseDown={handleClick}
        style={{
          transform: `translate(${randomPosition.rW}px, ${randomPosition.rH}px)`,
          transitionDuration: props.speed,
        }}
      >
        <FlashIcon />
        <span className="LightningBall-reflections">
          <span />
        </span>
      </button>
      <div className={`Flash ${active ? 'is-active' : ''}`} />
    </>
  );
};

LightningBall.propTypes = {
  onClick: PropTypes.func,
  speed: PropTypes.number,
};

LightningBall.defaultProps = {
  speed: 1200,
  onClick: () => {
    return null;
  },
};

export default LightningBall;
