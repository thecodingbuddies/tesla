import React from 'react';

import useAnimationFrameLoop from '../hooks/useAnimationFrameLoop';

import * as battery from './Battery';
import * as mouse from './Mouse';

const initialState = {
  battery: battery.initialState,
  mouse: mouse.initialState,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLUSH_ACTION_QUEUE':
      return action.actions.reduce((s, a) => {
        return {
          battery: battery.reducer(s.battery, a),
          mouse: mouse.reducer(s.mouse, a),
        };
      }, state);
    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  const actionQueue = React.useRef([]);

  const flushQueue = () => {
    const actions = actionQueue.current;
    if (actions.length > 0) {
      actionQueue.current = [];
      dispatch({
        type: 'FLUSH_ACTION_QUEUE',
        actions,
      });
    }
  };

  const addToDispatchQueue = (action) => {
    actionQueue.current = [...actionQueue.current, action];
  };

  useAnimationFrameLoop(() => {
    flushQueue();
  });

  return [state, addToDispatchQueue];
};
