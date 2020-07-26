import defaultUpgrade from './upgrades';

export const initialState = {
  ...defaultUpgrade,
  charge: 0,
};

export const actions = {
  ADD_CHARGE: (amount) => {
    return {
      type: 'ADD_CHARGE',
      amount,
    };
  },
  REMOVE_CHARGE: (amount) => {
    return {
      type: 'REMOVE_CHARGE',
      amount,
    };
  },
  APPLY_UPGRADE: (upgrade) => {
    return {
      type: 'APPLY_BATTERY_UPGRADE',
      upgrade,
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARGE':
      return {
        ...state,
        charge: state.charge + action.amount,
      };
    case 'REMOVE_CHARGE':
      return {
        ...state,
        charge: state.charge - action.amount || 0,
      };
    case 'APPLY_BATTERY_UPGRADE':
      return {
        ...state,
        ...action.upgrade(state),
      };
    default:
      return state;
  }
};
