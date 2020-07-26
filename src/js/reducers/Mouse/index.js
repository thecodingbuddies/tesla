import defaultUpgrade from './upgrades';

export const initialState = {
  ...defaultUpgrade,
  multipliers: [],
  canBreak: true,
};

export const actions = {
  APPLY_UPGRADE: (upgrade) => {
    return {
      type: 'APPLY_MOUSE_UPGRADE',
      upgrade,
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPLY_MOUSE_UPGRADE':
      return {
        ...state,
        ...action.upgrade(state),
      };
    default:
      return state;
  }
};
