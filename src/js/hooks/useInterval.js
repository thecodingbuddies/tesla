import React from 'react';

export default (callback, delay) => {
  const savedCallback = React.useRef(() => {});
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = savedCallback.current;
    const id = setInterval(tick, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
};
