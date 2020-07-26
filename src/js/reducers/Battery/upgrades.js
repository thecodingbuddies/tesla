export default {
  capacity: 100000,
};

export const upgrades = [
  {
    name: 'AAA',
    cost: 0,
    action: (_state) => {
      return {
        capacity: 250000,
      };
    },
  },
  {
    name: 'AA',
    cost: 0,
    action: (_state) => {
      return {
        capacity: 500000,
      };
    },
  },
  {
    name: 'A',
    cost: 0,
    action: (_state) => {
      return {
        capacity: 1000000,
      };
    },
  },
  {
    name: 'TESLA',
    cost: 0,
    action: (_state) => {
      return {
        capacity: 5000000,
      };
    },
  },
];
