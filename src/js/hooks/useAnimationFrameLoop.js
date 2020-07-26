import React from 'react';

export default (callback) => {
  const savedCallback = React.useRef(() => {});

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const cb = savedCallback.current;

    const loop = () => {
      cb();
      requestAnimationFrame(loop);
    };

    const id = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
};
